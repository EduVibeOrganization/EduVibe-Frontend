import React, { useEffect, useState } from "react";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import CourseCard from "@/components/course-card";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import Cart from "@/components/cart";
import Modal from "@/components/modal";
import { Paginator } from 'primereact/paginator';
import { CourseService } from "@/services/course.service";
import { CourseDTO } from "@/models/course.dto";

const Courses: React.FC = () => {
    const [cart, setCart] = useState<CourseDTO[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<CourseDTO | null>(null);
    const [addedCourse, setAddedCourse] = useState<number | null>(null);
    const [first, setFirst] = useState(0);
    const [courseService] = useState(new CourseService());
    const [courses, setCourses] = useState<CourseDTO[]>([]);
    const [openCart, setOpenCart] = useState(false);

    useEffect(() => {
        try{
            courseService.getCoursesByPage(1, 6).then((response) => {
                setCourses(response.data);
            });
        } catch (_){
            setCourses([]);
        }
    }, []);



    const onPageChange = (event: any) => {
        setFirst(event.first);
        courseService.getCoursesByPage(event.page + 1, 6).then((response) => {
            setCourses(response.data);
        });
    };

    const addToCart = (course: CourseDTO) => {
        setCart([...cart, course]);
        setAddedCourse(course.id);
        setTimeout(() => {
            setAddedCourse(null);
        }, 2000);
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((course) => course.id !== id));
    };

    const openModal = (course: CourseDTO) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const closeCart = () => {
        setOpenCart(false);
    };
    const openCartMenu = () => {
        setOpenCart(true);
    };

   



    return (
        <div className="page-size flex bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
            <div className="hidden lg:block">
                <CustomSideBar />
            </div>

            <div className="flex-1 p-8">
                <h1 className="text-3xl font-extrabold mb-8 text-white">Explora nuestros cursos</h1>

                <div className="flex justify-between mb-6">
                    <h2 className="text-md w-2/4 lg:w-auto md:text-xl lg:text-2xl font-semibold text-white">Cursos Disponibles</h2>
                    <button
                        onClick={openCartMenu}
                        className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-2  md:px-4 rounded-md"
                    >
                        🛒 Ver Carrito ({cart.length})
                    </button>
                </div>

                {
                  courses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <div key={course.id} className="relative">
                                    <CourseCard course={course}  openModal={openModal} />
                                    {addedCourse === course.id && (
                                        <div className="absolute top-0 right-0 bg-green-500 text-white text-sm p-2 rounded-md">
                                            ¡Curso añadido al carrito!
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-white  text-center font-bold text-xl lg:text-3xl p-14 md:p-20 lg:p-28  xl:p-32">
                            No existen cursos disponibles
                        </div>
                )}


                <div className="card mt-10">
                   <Paginator first={first} rows={courses.length > 6 ? courses.length / 6 : 1} totalRecords={10} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
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

            {openCart && (
                <Cart
                    cart={cart}
                    onClose={closeCart}
                    onRemoveFromCart={removeFromCart}
                />
            )}

        </div>
    );
};

export default Courses;
