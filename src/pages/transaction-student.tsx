import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsStudent } from "@/components/sidebar-items-student.component";
import { CourseDTO } from "@/models/course.dto";
import { ShoppingCartService } from "@/services/shopping-cart.service";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { jsPDF } from "jspdf"; // Importar jsPDF para generar el PDF

function TransactionStudent() {
    const router = useRouter();
    const [cart, setCart] = useState<CourseDTO[]>([]);
    const [receiptType, setReceiptType] = useState<string>("boleta"); // Estado para el tipo de recibo (boleta o factura)
    const shoppingCartService = new ShoppingCartService();

    // Función para obtener el carrito actualizado después del pago o cuando sea necesario
    const fetchShoppingCart = async () => {
        try {
            const updatedCart = await shoppingCartService.getShoppingCart();
            setCart(updatedCart);
        } catch (error) {
            console.error("Error al obtener el carrito de compras:", error);
        }
    };

    useEffect(() => {
        if (router.query.cartData) {
            const parsedCart = JSON.parse(router.query.cartData as string);
            setCart(parsedCart);
        } else {
            fetchShoppingCart();
        }

        const shoppingCartId = router.query.shoppingCartId as string;
        const userId = router.query.userId as string;

        console.log("Shopping Cart ID:", shoppingCartId);
        console.log("User ID:", userId);
    }, [router.query]);

    // Función para manejar el pago
    const handlePayment = (details: any) => {
        console.log("Pago realizado con éxito:", details);
        // Aquí puedes manejar lo que sucede después de un pago exitoso
    };

    // Función para generar el recibo en PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        
        // Título del recibo
        doc.setFontSize(18);
        doc.text(receiptType === "boleta" ? "Boleta de Compra" : "Factura de Compra", 20, 20);
        
        // Detalles de la compra
        doc.setFontSize(12);
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 30);
        doc.text(`Total: $${cart.reduce((total, course) => total + Number(course.price), 0)}`, 20, 40);

        // Listado de los cursos
        let y = 50;
        cart.forEach((course) => {
            doc.text(`${course.title} - $${course.price}`, 20, y);
            y += 10;
        });

        // Generar el PDF con el tipo de recibo seleccionado
        doc.save(`${receiptType === "boleta" ? "boleta" : "factura"}_compra.pdf`);
    };

    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsStudent />}
                    mainBackgroundColor="#25A0D2"
                    headerBackgroundColor="#0D556E"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                <div className="flex-1 p-8 bg-gray-500">
                    <h1 className="text-3xl font-extrabold mb-8 text-white">Transacciones</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Contenedor para los cursos seleccionados */}
                        <div>
                            {cart.length > 0 ? (
                                <div>
                                    <h2 className="text-xl font-bold text-white">Cursos seleccionados:</h2>
                                    <div className="mt-4">
                                        {cart.map((course) => (
                                            <div key={course.id} className="flex items-center justify-between p-4 bg-white border border-gray-300 mb-4 rounded-lg shadow-sm">
                                                <div className="flex items-center">
                                                    <img src={course.banner} alt={course.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                                                    <span className="text-sm text-gray-900">{course.title}</span>
                                                </div>
                                                <span className="text-sm text-gray-900">${course.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-white">No hay cursos seleccionados.</p>
                            )}
                        </div>

                        {/* Contenedor para el total, las condiciones y PayPal */}
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <div className="font-bold text-lg">
                                Total: ${cart.reduce((total, course) => total + Number(course.price), 0)}
                            </div>

                            <p className="text-sm text-gray-600 mt-4">
                                Esta plataforma está obligada por ley a recaudar los impuestos sobre las transacciones de las compras realizadas en determinadas jurisdicciones fiscales. Al completar la compra, aceptas las{" "}
                                <a
                                    href="/condiciones-de-uso"
                                    className="text-blue-500 font-semibold underline hover:text-blue-700"
                                >
                                    condiciones de uso
                                </a>.
                            </p>

                            {/* Integración de PayPal */}
                            <div className="mt-6">
                                <PayPalScriptProvider options={{ "client-id": "ASMJRzlMCVX91ApVxrUUIAuXRrYpZY9mS6-vP8POzbQOC9icxfGEtmQai63NefKbj3tkmP7iBFFMoU_g" }}>
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [{
                                                    amount: {
                                                        value: cart.reduce((total, course) => total + Number(course.price), 0).toString(),
                                                    },
                                                }],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                handlePayment(details);
                                            });
                                        }}
                                        onError={(err) => {
                                            console.error("Error en el pago:", err);
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>

                    {/* Sección para seleccionar el tipo de recibo y generar el PDF */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-white">Tipo de Recibo:</h2>
                        <table className="min-w-full bg-white border border-gray-300 mt-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">ID Carrito</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Tipo de Recibo</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4 text-sm text-gray-900">{router.query.shoppingCartId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        <select
                                            value={receiptType}
                                            onChange={(e) => setReceiptType(e.target.value)}
                                            className="p-2 bg-white rounded border"
                                        >
                                            <option value="boleta">Boleta</option>
                                            <option value="factura">Factura</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        <button
                                            onClick={generatePDF}
                                            className="mt-4 p-2 bg-blue-500 text-white rounded"
                                        >
                                            Descargar {receiptType === "boleta" ? "Boleta" : "Factura"} en PDF
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionStudent;
