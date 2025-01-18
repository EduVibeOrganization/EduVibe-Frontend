import "../app/globals.css";
import "../app/assets/styles/public.css";
import "../app/assets/styles/custom-switch.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomInputText } from "@/components/custom-input-text.component";
import { CustomSwitch } from "@/components/custom-switch.component";
import { CustomRow } from "@/components/custom-row.component";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { ConferenceService } from "@/services/conference.service";
import { RadioOptions } from "@/components/radio-option.component";

function ConferenceCreation() {
    const router = useRouter();
    const [roomName, setRoomName] = useState<string>("");
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [chat, setChat] = useState<string>("Básico");
    const [screenshare, setScreenShare] = useState<boolean>(false);
    const [handRaising, setHandRaising] = useState<boolean>(false);
    const [prejoinUI, setPrejoinUI] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const conferenceService = new ConferenceService();

    const createRoom = async () => {
        if (!roomName.trim()) {
            setErrorMessage("¡Por favor, ingresa un nombre para la sala!");
            return;
        }
        try {
            const privacySelected = privacy === "Público" ? "public" : "private";
            const chatSelected = chat !== "No";
            const advancedChat = chat === "Avanzado";

            await conferenceService.createRoom(roomName, privacySelected, {
                enable_chat: chatSelected,
                enable_advanced_chat: advancedChat,
                enable_screenshare: screenshare,
                enable_hand_raising: handRaising,
                enable_prejoin_ui: prejoinUI,
            });

            alert(`¡La sala "${roomName}" ha sido creada con éxito!`);
        } catch (e) {
            alert("Error al crear sala");
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <CustomSideBar />
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="card bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Crear Nueva Sala
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Personaliza tu sala y configura las opciones para comenzar a colaborar con tu equipo.
                    </p>
                    <div className="space-y-4">
                        <CustomRow
                            label={"Nombre"}
                            component={
                                <CustomInputText
                                    value={roomName}
                                    placeHolder={"Nombre"}
                                    onChange={(name: string) => setRoomName(name)}
                                    hasBorder={true}
                                />
                            }
                        />
                        {errorMessage && (
                            <div className="text-center bg-red-100 text-red-700 p-3 rounded-lg border border-red-300 mt-4 transition-all">
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}
                        <CustomRow
                            label={"Privacidad"}
                            component={
                                <RadioOptions
                                    name="privacy"
                                    value={privacy}
                                    options={[
                                        { value: "Privado", label: "Privado" },
                                        { value: "Público", label: "Público" },
                                    ]}
                                    onChange={(value: string) => setPrivacy(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={"Compartir Pantalla"}
                            component={
                                <CustomSwitch
                                    value={screenshare}
                                    onChange={(value: boolean) => setScreenShare(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={"Chat de Texto"}
                            component={
                                <RadioOptions
                                    name="chat"
                                    value={chat}
                                    options={[
                                        { value: "No", label: "No" },
                                        { value: "Básico", label: "Básico" },
                                        { value: "Avanzado", label: "Avanzado" },
                                    ]}
                                    onChange={(value: string) => setChat(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={"Levantar la mano"}
                            component={
                                <CustomSwitch
                                    value={handRaising}
                                    onChange={(value: boolean) => setHandRaising(value)}
                                />
                            }
                        />
                        <CustomRow
                            label={"Sala de espera"}
                            component={
                                <CustomSwitch
                                    value={prejoinUI}
                                    onChange={(value: boolean) => setPrejoinUI(value)}
                                />
                            }
                        />
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => createRoom()}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md transition-all"
                        >
                            Crear Sala
                        </button>
                        <button
                            onClick={() => router.push("/conference-list")}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md shadow-md transition-all"
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