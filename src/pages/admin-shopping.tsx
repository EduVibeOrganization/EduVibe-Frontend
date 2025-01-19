import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-shopping.css";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useEffect, useState } from "react";

function AdminShopping() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fakeOrders = [
            {
                id: 1,
                user: "username1@gmail.com",
                purchaseDate: "2025-01-10",
                paymentMethod: "PayPal",
                total: 120.0,
                currency: "PEN",
                courses: [
                    {
                        title: "Curso React Avanzado",
                        subtitle: "Domina React con Hooks y Context",
                        description: "Aprende a desarrollar aplicaciones complejas en React.",
                        rating: 4.8,
                        startDate: "2025-02-01",
                        endDate: "2025-03-01",
                        hours: 40,
                        banner: "https://www.codingdojo.la/wp-content/uploads/2022/07/react.jpg",
                        price: 60.0,
                        id: 101,
                    },
                    {
                        title: "Curso Node.js",
                        subtitle: "Backend con JavaScript",
                        description: "Construye servidores y APIs con Node.js y Express.",
                        rating: 4.5,
                        startDate: "2025-03-05",
                        endDate: "2025-04-05",
                        hours: 30,
                        banner: "https://19604448.fs1.hubspotusercontent-na1.net/hubfs/19604448/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg",
                        price: 60.0,
                        id: 102,
                    },
                ],
            },
            {
                id: 2,
                user: "username2@gmail.com",
                purchaseDate: "2025-01-15",
                paymentMethod: "Credit Card",
                total: 80.0,
                currency: "PEN",
                courses: [
                    {
                        title: "Curso Python Básico",
                        subtitle: "Aprende desde cero",
                        description: "Un curso para principiantes en Python.",
                        rating: 4.2,
                        startDate: "2025-02-10",
                        endDate: "2025-03-10",
                        hours: 25,
                        banner: "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/6458d604829148153fb7cd52_codigo-python-beautiful-soup.jpg",
                        price: 80.0,
                        id: 103,
                    },
                ],
            },
        ];
        setOrders(fakeOrders);
    }, []);

    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsAdmin />}
                    mainBackgroundColor="#343A40"
                    headerBackgroundColor="#23272B"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                <div className="admin-shopping-content">
                    <h1>Compras</h1>
                    <p className="warning-text">
                        ⚠️ Aquí puedes visualizar las órdenes de compra y sus detalles.
                    </p>
                    <div className="orders-section">
                        <h2>Órdenes de Compra</h2>
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Método de Pago</th>
                                    <th>Total</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.user}</td>
                                        <td>{order.purchaseDate}</td>
                                        <td>{order.paymentMethod}</td>
                                        <td>
                                            {order.total} {order.currency}
                                        </td>
                                        <td>
                                            <button
                                                className="view-details-button"
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                Ver Detalle
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {selectedOrder && (
                        <div className="order-details-section">
                            <h3>Detalle de la Orden #{selectedOrder.id}</h3>
                            <ul className="courses-list">
                                {selectedOrder.courses.map((course) => (
                                    <li key={course.id} className="course-item">
                                        <img
                                            src={course.banner}
                                            alt={course.title}
                                            className="course-banner"
                                        />
                                        <div className="course-info">
                                            <h4>{course.title}</h4>
                                            <p>{course.subtitle}</p>
                                            <p><strong>Descripción:</strong> {course.description}</p>
                                            <p><strong>Duración:</strong> {course.hours} horas</p>
                                            <p><strong>Inicio:</strong> {course.startDate}</p>
                                            <p><strong>Fin:</strong> {course.endDate}</p>
                                            <p><strong>Precio:</strong> {course.price} PEN</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="close-details-button"
                                onClick={() => setSelectedOrder(null)}
                            >
                                Cerrar Detalle
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminShopping;