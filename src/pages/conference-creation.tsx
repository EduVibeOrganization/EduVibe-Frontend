import "../app/globals.css";
import "../app/assets/styles/public.css";
import "../app/assets/styles/conference-creation.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter } from "next/navigation";
import { CustomInputText } from "@/components/custom-input-text.component";
import { CustomSelectorComponent } from "@/components/custom-selector.component";
import { useState } from "react";
import { CustomInputSwitch } from "@/components/custom-input-switch.component";
import { CustomRow } from "@/components/custom-row.component";
import { ConferenceService } from "@/services/conference.service";
import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsStudent } from "@/components/sidebar-items-student.component";

function ConferenceCreation(){
    const router = useRouter();
    const [roomName, setRoomName] = useState<string>("");
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [chat, setChat] = useState<string>("Básico");
    const [screenshare, setScreenShare] = useState<boolean>(false);
    const [handRaising, setHandRaising] = useState<boolean>(false);
    const [prejoinUI, setPrejoinUI] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const conferenceService = new ConferenceService();

    const createRoom = async() => {
        if(!roomName.trim()){
            setErrorMessage("¡Por favor, ingresa un nombre para la sala!");
            return;
        }
        try {
            const privacySelected = (privacy == "Público")? "public" : "private";
            const chatSelected = (chat == "No")? false : true;
            const advacedChat = (chat == "Básico" || !chatSelected)? false : true;
            await conferenceService.createRoom(
                roomName, 
                privacySelected, 
                {
                    enable_chat: chatSelected,
                    enable_advanced_chat: advacedChat,
                    enable_screenshare: screenshare,
                    enable_hand_raising: handRaising,
                    enable_prejoin_ui: prejoinUI
                }
            );
            alert("Sala creada satifactoriamente");
        } catch(e){
            alert("Error al crear sala");
        }
    }

    return(
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsStudent />}
                    mainBackgroundColor="#25A0D2"
                    headerBackgroundColor="#0D556E"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                <div className="card-container">
                    <div className="card">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
                            Crear Nueva Sala
                        </h2>
                        <p className="text-gray-700 text-center mb-6 text-lg">
                            Personaliza tu sala y configura las opciones para comenzar a colaborar con tu equipo.
                        </p>
                        <div className="card-main-content">
                        <CustomRow 
                            label={"Nombre"}
                            component={ <CustomInputText value={roomName} placeHolder={"Nombre"} onChange={(name: string) => setRoomName(name)} hasBorder={true} />
                            }
                            />
                            {errorMessage && (
                                <div className="text-center bg-red-100 text-red-700 p-3 rounded-lg border border-red-300 mt-4">
                                    <p className="text-sm">{errorMessage}</p>
                                </div>
                            )}
                            <CustomRow 
                                label={"Privacidad"} 
                                component={ <CustomSelectorComponent value={privacy} options={["Privado", "Público"]} onChange={(value) => setPrivacy(value)}/> }
                            />
                            <CustomRow 
                                label={"Compartir Pantalla"} 
                                component={<CustomInputSwitch onChange={(e) => setScreenShare(e)}/>}
                            />
                            <CustomRow 
                                label={"Chat de Texto"} 
                                component={ <CustomSelectorComponent value={chat} options={["No", "Básico", "Avanzado"]} onChange={(value) => setChat(value)}/> }
                            />
                            <CustomRow 
                                label={"Levantar la mano"} 
                                component={<CustomInputSwitch onChange={(e) => setHandRaising(e)}/>}
                            />
                            <CustomRow 
                                label={"Sala de espera"} 
                                component={<CustomInputSwitch onChange={(e) => setPrejoinUI(e)}/>}
                            />
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => createRoom()}
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
            
        </div>
    );
}

export default ConferenceCreation;