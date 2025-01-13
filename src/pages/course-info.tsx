
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { GoalCard } from "@/components/goal-card.component";
import { CourseItemDTO } from "@/models/course-item.dto";
import { CourseDTO } from "@/models/course.dto";
import { CourseService } from "@/services/course.service";
import { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { GoalService } from "@/services/goal.service";


function CourseInfo(){
    const [course, setCourse] = useState(new CourseDTO("React", 4.5, new Date(2021, 1, 1), new Date(2021, 2, 1), 0.5,"Hola", "Hola"));
    const [goals, setGoals] = useState(new Array<CourseItemDTO>());
    const [sections, setSections] = useState(new Array<CourseItemDTO>());
    const [requirements, setRequirements] = useState(new Array<CourseItemDTO>());
    const [courseService] = useState(new CourseService());
    const [goalService] = useState(new GoalService());

    useEffect(() => {
        const courseId = new URLSearchParams(window.location.search).get("id");
        try{
            courseService.getCourseById(Number(courseId)).then((response) => {
                const courseData = new CourseDTO(response.data.title, response.data.rating, new Date(response.data.start_date), new Date(response.data.end_date), response.data.progress_rate, response.data.subtitle, response.data.description);
                setCourse(courseData);
            }).then(() => {
                goalService.getGoalsByCourseId(Number(courseId)).then((response) => {
                    setGoals(response.data);
                });
            });
        } catch(_){
            setCourse(new CourseDTO("React", 4.5, new Date(2021, 1, 1), new Date(2021, 2, 1), 0.5,"Hola", "Hola"));
        }



    },[]);
    return (
        <div className="page-size flex">
             <div className="hidden lg:block">
               <CustomSideBar/>
             </div>
            <section className="mt-14 ml-10 w-full ">
                <h1 className="font-semibold bg-blue-300 w-fit p-2 rounded-xl text-xl lg:text-3xl"> {course.title.charAt(0).toUpperCase() + course.title.slice(1)}</h1>
                <div className="flex justify-evenly mt-12">
                    <div className="flex flex-col gap-8">
                         <h4 className="font-semibold bg-blue-300 w-fit p-2 rounded-xl text-xl lg:text-3xl"> Introducción a IoT en agrícola</h4>
                         <p className="text-sm lg:text-base"> Alto ahí, quieres aprender lo último en tecnología, en hora buena.
                           Aprende la última versión de IoT owo</p>
                           <p className="text-sm lg:text-base"> ¿Qué aprenderás? </p>
                           <div className="flex flex-col gap-2 ml-4 text-sm lg:text-base">
                            {
                                goals.map((goal) => {
                                    return <GoalCard title={goal.title}/>
                                })
                            }
                            <div className="mt-5 flex justify-between">
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
                              <p> 28 horas </p>
                              <p> Intermedio </p>
                            </div>
                           </div>
                    </div>
                    <img src="/public/images/m1.jpg" alt="Course Banner" className="w-96 h-96 hidden lg:block"/>
                </div>
            </section>
           </div>
    )
}

export default CourseInfo;