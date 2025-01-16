import "../app/globals.css";
import "../app/assets/styles/public.css";
import "../app/assets/styles/custom-switch.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter } from "next/navigation";
import { CustomInputText } from "@/components/custom-input-text.component";
import React, { useState } from "react";
import { CustomSwitch } from "@/components/custom-switch.component";
import { CustomRow } from "@/components/custom-row.component";
import { CustomSideBar } from "@/components/custom-sidebar.component";

function ConferenceCreation() {
    const router = useRouter();
    const [roomName, setRoomName] = useState<string>("");
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [chat, setChat] = useState<string>("Básico");
    const [screenShare, setScreenShare] = useState<boolean>(false);
    const [waitingRoom, setWaitingRoom] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const CreateRoom = () => {
        if (!roomName.trim()) {
            setErrorMessage("¡Por favor, ingresa un nombre para la sala!");
            return;
        }

        setErrorMessage("");
        alert(`¡La sala "${roomName}" ha sido creada con éxito! 🎉`);
        router.push("/conference-list");
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-cyan-50">
            {/* Sidebar */}
            <div className="hidden lg:block bg-white shadow-md border-none">
                <CustomSideBar />
            </div>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">
                    {/* Header */}
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
                        🎉 Crear Nueva Sala
                    </h2>
                    <p className="text-gray-700 text-center mb-6 text-lg">
                        Personaliza tu sala y configura las opciones para comenzar a colaborar con tu equipo.
                    </p>

                    {/* Form */}
                    <div className="space-y-10">
                        <CustomRow
                            label={
                                <span className="font-medium text-gray-800 text-lg">
                                    Nombre de la Sala
                                </span>
                            }
                            component={
                                <CustomInputText
                                    value={roomName}
                                    placeHolder="Escribe el nombre de la sala"
                                    onChange={(value: string) => setRoomName(value)}
                                    hasBorder={true}
                                />
                            }
                        />
                        {errorMessage && (
                            <div className="text-center bg-red-100 text-red-700 p-3 rounded-lg border border-red-300 mt-4">
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}
                        <CustomRow
                            label={
                                <span className="font-medium text-gray-800 text-lg">
                                    Privacidad
                                </span>
                            }
                            component={
                                <div className="flex items-center space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="privacy"
                                            value="Privado"
                                            checked={privacy === "Privado"}
                                            onChange={() => setPrivacy("Privado")}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="text-gray-800">Privado</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="privacy"
                                            value="Público"
                                            checked={privacy === "Público"}
                                            onChange={() => setPrivacy("Público")}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="text-gray-800">Público</span>
                                    </label>
                                </div>
                            }
                        />
                        <CustomRow
                            label={
                                <span className="font-medium text-gray-800 text-lg">
                                    Compartir Pantalla
                                </span>
                            }
                            component={
                                <CustomSwitch
                                    value={screenShare}
                                    onChange={(value: boolean) => setScreenShare(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={
                                <span className="font-medium text-gray-800 text-lg">
                                    Chat de Texto
                                </span>
                            }
                            component={
                                <div className="flex items-center space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="chat"
                                            value="No"
                                            checked={chat === "No"}
                                            onChange={() => setChat("No")}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="text-gray-800">No</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="chat"
                                            value="Básico"
                                            checked={chat === "Básico"}
                                            onChange={() => setChat("Básico")}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="text-gray-800">Básico</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="chat"
                                            value="Avanzado"
                                            checked={chat === "Avanzado"}
                                            onChange={() => setChat("Avanzado")}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="text-gray-800">Avanzado</span>
                                    </label>
                                </div>
                            }
                        />
                        <CustomRow
                            label={
                                <span className="font-medium text-gray-800 text-lg">
                                    Sala de Espera
                                </span>
                            }
                            component={
                                <CustomSwitch
                                    value={waitingRoom}
                                    onChange={(value: boolean) => setWaitingRoom(value)}
                                />
                            }
                        />
                    </div>

                    {/* Actions */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={CreateRoom}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        >
                            Crear Sala
                        </button>
                        <button
                            onClick={() => router.push("/conference-list")}
                            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                        >
                            Ver Salas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConferenceCreation;