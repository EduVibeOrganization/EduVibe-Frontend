import React from "react";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { CourseDTO } from "@/models/course.dto";

interface ModalProps {
    isOpen: boolean;
    course: CourseDTO;
    onClose: () => void;
    addToCart: (course: CourseDTO) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, course, onClose, addToCart }) => {
    if (!isOpen) return null;

    const handleAddToCart = () => {
        addToCart(course);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-gray-800">{course.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-xl font-semibold"
                    >
                        &times;
                    </button>
                </div>

                <img
                    src={course.banner} // Propiedad ajustada según CourseDTO
                    alt={course.title}
                    className="w-full h-56 object-cover rounded-md mt-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
                />

                <p className="text-gray-700 mt-4 text-lg leading-relaxed">{course.description}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-yellow-500 font-semibold">⭐ {course.rating}</span>
                    <span className="text-gray-900 font-bold text-2xl">${course.price}</span>
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md shadow-lg transition duration-300 transform hover:scale-105"
                        onClick={handleAddToCart}
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
