import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useState, useEffect } from "react";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-event.css";

const fakeCourses = [
    {
        id: 1,
        title: "Curso de JavaScript Avanzado",
        subtitle: "Domina el lenguaje más popular del mundo",
        description: "Aprende conceptos avanzados de JavaScript y cómo aplicarlos.",
        rating: 4.8,
        startDate: new Date("2025-01-01"),
        hours: 40,
        banner: "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/6458d604829148153fb7cd52_codigo-python-beautiful-soup.jpg",
        price: 99.99,
    },
    {
        id: 2,
        title: "Introducción a React",
        subtitle: "Crea interfaces modernas y dinámicas",
        description: "Un curso completo para aprender React desde cero.",
        rating: 4.6,
        startDate: new Date("2025-02-01"),
        hours: 30,
        banner: "https://www.codingdojo.la/wp-content/uploads/2022/07/react.jpg",
        price: 0,
    }
];

function AdminEvent(){
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    setCourses(fakeCourses);
    }, []);

    const handleModifyAccessTime = (courseId: number) => {
        alert(`Modificación del tiempo de acceso para el curso con ID: ${courseId}`);
    };

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
        <div className="presentations-content">
            <h1>Gestión de Ponencias</h1>
            <div className="presentations-list">
            {courses.map((course) => (
                <div key={course.id} className="presentation-card">
                <img src={course.banner} alt={`${course.title} banner`} />
                <div className="presentation-info">
                    <h2>{course.title}</h2>
                    <h3>{course.subtitle}</h3>
                    <p>{course.description}</p>
                    <div className="presentation-details">
                    <span>Horas: {course.hours}</span>
                    <span>Rating: {course.rating}</span>
                    <span>Precio: PEN {course.price.toFixed(2)}</span>
                    </div>
                    <button
                    className="modify-access-btn"
                    onClick={() => handleModifyAccessTime(course.id)}
                    >
                    Modificar tiempo de acceso
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
    );
}

export default AdminEvent;
