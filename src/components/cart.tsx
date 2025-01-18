import React from "react";
import { CourseDTO } from "@/models/course.dto";

interface CartProps {
    cart: CourseDTO[];
    onRemoveFromCart: (id: number) => void;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemoveFromCart, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full transition-transform transform duration-300 ease-in-out">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Tu Carrito</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-2xl font-semibold"
                    >
                        &times;
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center text-gray-600 mt-4">
                        <p>Tu carrito está vacío.</p>
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                            ¡Explora nuestros cursos y agrega algunos al carrito!
                        </p>
                    </div>
                ) : (
                    <div className="mt-4">
                        <ul className="space-y-6">
                            {cart.map((course) => (
                                <li
                                    key={course.id}
                                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={course.banner} // Asegúrate de que esta propiedad sea correcta
                                            alt={course.title}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <span className="font-semibold text-gray-800">{course.title}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-gray-800 font-bold">${course.price}</span>
                                        <button
                                            onClick={() => onRemoveFromCart(course.id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-semibold transition duration-200"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex justify-between items-center border-t pt-4">
                            <span className="font-semibold text-gray-800 text-lg">
                                Total: $
                                {cart.reduce((total, course) => total + course.price, 0).toFixed(2)}                            </span>
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-md shadow-lg transition duration-300 transform hover:scale-105">
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
