import React, { useState } from "react";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import CourseCard, { Course } from "@/components/course-card";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import Cart from "@/components/cart";
import Modal from "@/components/modal";

const Courses: React.FC = () => {
    const [cart, setCart] = useState<Course[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [addedCourse, setAddedCourse] = useState<number | null>(null);

    const addToCart = (course: Course) => {
        setCart([...cart, course]);
        setAddedCourse(course.id);
        setTimeout(() => {
            setAddedCourse(null);
        }, 2000);
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((course) => course.id !== id));
    };

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const courses: Course[] = [
        {
            id: 1,
            title: "JavaScript Avanzado",
            description: "De Junior a Senior",
            rating: 4.8,
            price: "150.99",
            image: "https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1536x1152.jpg",
        },
        {
            id: 2,
            title: "Python para Ciencia de Datos",
            description: "Manipulación de datos",
            rating: 4.7,
            price: "140.99",
            image: "https://cdn.ourcodeworld.com/public-media/articles/articleocw-5dbb5b040dc23.webp",
        },
        {
            id: 3,
            title: "React Hooks Avanzados",
            description: "Estructuras y patrones",
            rating: 4.9,
            price: "160.99",
            image: "https://i.ytimg.com/vi/mOz5eNcEHu4/maxresdefault.jpg",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
            <div className="hidden lg:block lg:w-1/4 bg-white shadow-md border-none">
                <CustomSideBar />
            </div>

            <div className="flex-1 p-8">
                <h1 className="text-3xl font-extrabold mb-8 text-white">Explora nuestros cursos</h1>

                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-white">Cursos Disponibles</h2>
                    <button
                        onClick={openCart}
                        className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-md"
                    >
                        🛒 Ver Carrito ({cart.length})
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="relative">
                            <CourseCard course={course} addToCart={addToCart} openModal={openModal} />
                            {/* Mostrar el mensaje visual cuando el curso es añadido al carrito owo*/}
                            {addedCourse === course.id && (
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-sm p-2 rounded-md">
                                    ¡Curso añadido al carrito!
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedCourse && (
                <Modal
                    course={selectedCourse}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    addToCart={addToCart}
                />
            )}

            {isCartOpen && (
                <Cart
                    cart={cart}
                    onRemoveFromCart={removeFromCart}
                    onClose={closeCart}
                />
            )}
        </div>
    );
};

export default Courses;
