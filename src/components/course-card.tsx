import { CourseDTO } from "@/models/course.dto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


interface CourseCardProps {
    course: CourseDTO;
    openModal: (course: CourseDTO) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, openModal }) => {
    const navigator = useRouter();
    return (
        <div
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-5 cursor-pointer"
            onClick={() => openModal(course)}>
            <Image 
            width={300}  height={200}
                src={course.banner}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{course.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-500 font-semibold">⭐ {course.rating}</span>
                <span className="text-gray-900 font-bold">${course.price}</span>
            </div>
            <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white w-full py-2 mt-4 rounded-md transition transform hover:scale-105"
                onClick={() => navigator.push(`/course-info?id=${course.id}`)}
            >
                Ver información
            </button>
        </div>
    );
};

export default CourseCard;


