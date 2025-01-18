"use client";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { SectionCard } from "@/components/section-card.component";
import { CourseItemDTO } from "@/models/course-item.dto";
import { CourseDTO } from "@/models/course.dto";
import { CourseService } from "@/services/course.service";
import { SectionService } from "@/services/section.service";
import { useEffect, useState } from "react";

function CourseVideo() {
    const courseId = new URLSearchParams(window.location.search).get("id");
    const fileUrl = new URLSearchParams(window.location.search).get("fileUrl");
    const [course, setCourse] = useState<CourseDTO | null>(null);
    const [sections, setSections] = useState<any[]>([]);

    const courseService = new CourseService();
    const sectionService = new SectionService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseResponse = await courseService.getCourseById(Number(courseId));
                setCourse(new CourseDTO(
                    courseResponse.data.title,
                    courseResponse.data.rating,
                    new Date(courseResponse.data.start_date),
                    new Date(courseResponse.data.end_date),
                    courseResponse.data.subtitle,
                    courseResponse.data.description,
                    courseResponse.data.hours,
                    courseResponse.data.banner,
                    courseResponse.data.price,
                    courseResponse.data.id
                ));
            } catch (error) {
                console.error("Error fetching course data:", error);
                setCourse(null);
            }

            try {
                const sectionsResponse = await sectionService.getSectionsByCourseId(Number(courseId));
                setSections(sectionsResponse.data);
            } catch (error) {
                console.error("Error fetching sections:", error);
                setSections([]);
            }
        };

        fetchData();
    }, [courseId]);

    return (
        <div className="page-size flex gap-16">
            <div>
                <CustomSideBar />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h1 className="text-4xl font-bold text-black text-start">
                    {course?.title || "Cargando..."}
                </h1>
                <div>
                    {fileUrl ? (
                        <iframe
                            src={fileUrl}
                            width="100%"
                            height="500"
                            allowFullScreen
                            title="Video"
                        />
                    ) : (
                        <p>Recurso no disponible.</p>
                    )}
                </div>
                <div className="flex flex-col gap-4 justify-end items-end mx-10">
                    {sections.map((section) => (
                        <SectionCard key={section.id} section={section} />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-5">
                    <button onClick={() => null} className="bg-blue-400 p-2 rounded-xl text-white">Anterior</button>
                    <button className="bg-blue-400 p-2 rounded-xl text-white" onClick={() => null}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default CourseVideo;
