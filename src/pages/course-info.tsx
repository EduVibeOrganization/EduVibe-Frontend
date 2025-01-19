
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { GoalCard } from "@/components/goal-card.component";
import { CourseItemDTO } from "@/models/course-item.dto";
import { CourseDTO } from "@/models/course.dto";
import { CourseService } from "@/services/course.service";
import { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { GoalService } from "@/services/goal.service";
import Image from "next/image";
import { SectionCard } from "@/components/section-card.component";
import { SectionService } from "@/services/section.service";
import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsStudent } from "@/components/sidebar-items-student.component";


function CourseInfo(){
    const [course, setCourse] = useState(new CourseDTO("React", 4.5, new Date(2021, 1, 1), new Date(2021, 2, 1),"Hola", "Hola",0,"",0,0));
    const [goals, setGoals] = useState(new Array<CourseItemDTO>());
    const [sections, setSections] = useState(new Array<CourseItemDTO>());

    const [courseService] = useState(new CourseService());
    const [goalService] = useState(new GoalService());
    const [sectionService] = useState(new SectionService());

    useEffect(() => {
        const courseId = new URLSearchParams(window.location.search).get("id");
        try{
            courseService.getCourseById(Number(courseId)).then((response) => {
                const courseData = new CourseDTO(response.data.title, response.data.rating, new Date(response.data.start_date), new Date(response.data.end_date), response.data.subtitle, response.data.description, response.data.hours, response.data.banner, response.data.price, response.data.id);
                setCourse(courseData);
            }).then(() => {
                goalService.getGoalsByCourseId(Number(courseId)).then((response) => {
                    setGoals(response.data);
                });
            });
        } catch(_){
            setCourse(new CourseDTO("React", 4.5, new Date(2021, 1, 1), new Date(2021, 2, 1),"Hola", "Hola", 0, "", 0, 0));
        }

        try{
            sectionService.getSectionsByCourseId(Number(courseId)).then((response) => {
                setSections(response.data);
            });
        } catch(_){
            setSections([]);
        }


    },[]);

    return (
        <div className="content-background" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course.banner})`}}>
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsStudent/>}
                    mainBackgroundColor="#25A0D2"
                    headerBackgroundColor="#0D556E"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                <section className="mt-14 ml-10 w-full ">
                    <h1 className="font-semibold bg-blue-300 w-fit p-2 rounded-xl text-xl lg:text-3xl"> {course.title.charAt(0).toUpperCase() + course.title.slice(1)}</h1>
                    <div className="flex justify-evenly mt-12">
                        <div className="flex flex-col gap-8 text-white">
                            <h4 className="font-semibold bg-blue-300 w-fit p-2 rounded-xl text-xl lg:text-3xl text-black"> {course.subtitle}</h4>
                            <p className="text-sm lg:text-base"> {course.description}</p>
                            <p className="text-sm lg:text-base  "> ¿Qué aprenderás? </p>
                            <div className="flex flex-col gap-2 ml-4 text-sm lg:text-base">
                                {
                                    goals.map((goal) => {
                                        return <GoalCard title={goal.title}/>
                                    })
                                }
                                <div className="mt-5 flex justify-between gap-5">
                                <Rating value={course.rating} cancel={false} />
                                <div className="flex gap-2">
                                        <i className="pi pi-calendar ml-5" style={{ fontSize: '1.5rem' }}></i>
                                        <p>
                                            {new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(course.startDate).charAt(0).toUpperCase() + new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(course.startDate).slice(1)}
                                        </p>
                                        <p>
                                        {new Intl.DateTimeFormat('es-ES', { year: 'numeric' }).format(course.endDate)}
                                        </p>
                                </div>
                                <div className="flex  gap-2">
                                <p> { course.hours } </p>
                                <p> Horas </p>
                                </div>
                                </div>
                                <div className="mt-8 flex flex-col gap-5">
                                {
                                    sections.map((section) => {
                                        return <SectionCard section={section}/>
                                    }
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CourseInfo;