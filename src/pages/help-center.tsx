import React from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { CustomSideBar } from "@/components/custom-sidebar.component";

function HelpCenter() {
    const router = useRouter();

    const handleRedirection = (role: string) => {
        if (role === "student") {
            router.push("/help-center-student");
        } else if (role === "teacher") {
            router.push("/help-center-teacher");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="hidden lg:block lg:w-1/4 bg-white shadow-md border-none">
                <CustomSideBar />
            </div>

            {/* Contenido principal */}
            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="text-center p-8 max-w-lg bg-white shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenido al Centro de Ayuda</h1>
                    <p className="text-gray-600 mb-8">Selecciona tu rol para acceder a la información relevante para ti.</p>

                    <div className="space-y-6">
                        <button
                            className="w-full max-w-md px-6 py-3 text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 transition duration-300"
                            onClick={() => handleRedirection("student")}
                        >
                            Soy Estudiante
                        </button>
                        <button
                            className="w-full max-w-md px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                            onClick={() => handleRedirection("teacher")}
                        >
                            Soy Profesor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
