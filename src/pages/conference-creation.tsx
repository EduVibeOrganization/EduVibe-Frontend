import "../app/globals.css";
import "../app/assets/styles/public.css";
import "../app/assets/styles/conference-creation.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter } from "next/navigation";
import { CustomInputText } from "@/components/custom-input-text.component";
import { CustomSelectorComponent } from "@/components/custom-selector.component";
import React, { useState } from "react";
import { CustomInputSwitch } from "@/components/custom-input-switch.component";
import { CustomRow } from "@/components/custom-row.component";
import { CustomSideBar } from "@/components/custom-sidebar.component";

function ConferenceCreation() {
    const router = useRouter();
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [chat, setChat] = useState<string>("Básico");

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-cyan-50 flex items-center justify-center p-6">
            <div className="flex w-full max-w-7xl gap-6">

                <div className="hidden lg:block bg-white shadow-md border-none">
                    <CustomSideBar/>
                </div>

                <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
                    {/* Header */}
                    <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
                        🎉 Crear Nueva Sala
                    </h2>
                    <p className="text-gray-700 text-center mb-8 text-lg">
                        Personaliza tu sala y configura las opciones para comenzar a colaborar con tu equipo.
                    </p>

                    {/* Form */}
                    <div className="space-y-8">
                        <CustomRow
                            label={<span className="font-semibold text-gray-700 text-lg">Nombre de la Sala</span>}
                            component={
                                <CustomInputText
                                    value={""}
                                    placeHolder="Escribe el nombre de la sala"
                                    onChange={(e) => console.log(e)}
                                    hasBorder={true}
                                />
                            }
                        />
                        <CustomRow
                            label={<span className="font-semibold text-gray-700 text-lg">Privacidad</span>}
                            component={
                                <CustomSelectorComponent
                                    value={privacy}
                                    options={["Privado", "Público"]}
                                    onChange={(value) => setPrivacy(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={<span className="font-semibold text-gray-700 text-lg">Compartir Pantalla</span>}
                            component={<CustomInputSwitch />}
                        />
                        <CustomRow
                            label={<span className="font-semibold text-gray-700 text-lg">Chat de Texto</span>}
                            component={
                                <CustomSelectorComponent
                                    value={chat}
                                    options={["No", "Básico", "Avanzado"]}
                                    onChange={(value) => setChat(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={<span className="font-semibold text-gray-700 text-lg">Sala de Espera</span>}
                            component={<CustomInputSwitch />}
                        />
                    </div>

                    {/* Actions */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => router.push("/sign-in")}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 transform hover:scale-105"
                        >
                            Crear Sala
                        </button>
                        <button
                            onClick={() => router.push("/conference-list")}
                            className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 transform hover:scale-105"
                        >
                            Ver Salas
                        </button>
                        <button
                            onClick={() => router.push("/sign-in")}
                            className="bg-red-100 text-red-600 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200 transform hover:scale-105"
                        >
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConferenceCreation;
