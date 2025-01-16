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
import { CustomButton } from "@/components/custom-button.component";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { ConferenceService } from "@/services/conference.service";

function ConferenceCreation(){
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [enable_chat, setChat] = useState<string>("Básico");
    const [enable_screenshare, setScreenShare] = useState<boolean>(false);
    const [enable_hand_raising, setHandRaising] = useState<boolean>(false);
    const [enable_prejoin_ui, setPrejoinUI] = useState<boolean>(false);
    const conferenceService = new ConferenceService();

    const createRoom = async() => {
        try {
            const privacySelected = (privacy == "Público")? "public" : "private";
            const chatSelected = (enable_chat == "No")? false : true;
            const advacedChat = (enable_chat == "Básico" || !chatSelected)? false : true;
            await conferenceService.createRoom(
                name, 
                privacySelected, 
                {
                    enable_chat: chatSelected,
                    enable_advanced_chat: advacedChat,
                    enable_screenshare,
                    enable_hand_raising,
                    enable_prejoin_ui
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
                <CustomSideBar />
                <div className="card-container">
                    <div className="card">
                    <CustomRow 
                    label={"Nombre"} 
                    component={<CustomInputText value={name} placeHolder={"Nombre"} onChange={(e) => setName(e)} hasBorder={false}/>}
                    />
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
                        component={ <CustomSelectorComponent value={enable_chat} options={["No", "Básico", "Avanzado"]} onChange={(value) => setChat(value)}/> }
                    />
                    <CustomRow 
                        label={"Levantar la mano"} 
                        component={<CustomInputSwitch onChange={(e) => setHandRaising(e)}/>}
                    />
                    <CustomRow 
                        label={"Sala de espera"} 
                        component={<CustomInputSwitch onChange={(e) => setPrejoinUI(e)}/>}
                    />
                    <CustomButton title={"Crear Sala"} onSubmit={() => createRoom()}></CustomButton>
                    <CustomButton title={"Ver Salas"} onSubmit={() => router.push("/conference-list")}></CustomButton>
                    <CustomButton title={"Entrar"} onSubmit={() => router.push("/conference-screen")}></CustomButton>
                    <CustomButton title={"Regresar"} onSubmit={() => router.push("/sign-in")}></CustomButton>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ConferenceCreation;
