import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useState, useEffect } from "react";
import { CourseDTO } from "@/models/course.dto";
import { CourseService } from "@/services/course.service";
import { Paginator } from "primereact/paginator";
import CourseCard from "@/components/course-card";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin.css";

function AdminEvent(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<CourseDTO | null>(null);
    const [first, setFirst] = useState(0);
    const [courseService] = useState(new CourseService());
    const [courses, setCourses] = useState<CourseDTO[]>([]);

    useEffect(() => {
        courseService.getCoursesByPage(1, 6).then((response) => {
            setCourses(response.data);
        }).catch(() => {
            setCourses([]);
        });
    }, []);

    const onPageChange = (event: any) => {
        setFirst(event.first);
        courseService.getCoursesByPage(event.page + 1, 6).then((response) => {
            setCourses(response.data);
        });
    };
    
    const openModal = (course: CourseDTO) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
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
            <main className="admin-content">
                <div className="content">
                    <h1 className="title">Administración de Eventos</h1>
                    <section className="section">
                        <div className="flex-1 p-8 bg-[#343A40]">
                            <div className="flex align-center justify-between m-5">
                                <h1 className="text-3xl font-extrabold text-white">Cursos Disponibles</h1>
                                <Paginator className={"bg-white rounded p-4"} first={first} rows={courses.length > 3 ? courses.length / 3 : 1} totalRecords={10} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
                            </div>
                            {courses.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                    {courses.map((course) => (
                                        <div key={course.id} className="relative">
                                            <CourseCard course={course} openModal={openModal} />
                                        </div>
                                    ))}
                                </div>
                                ) : (
                                    <div className="text-white  text-center font-bold text-xl lg:text-3xl p-14 md:p-20 lg:p-28  xl:p-32">
                                        No existen cursos disponibles
                                    </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
    );
}

export default AdminEvent;
