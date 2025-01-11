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

function ConferenceCreation(){
    const router = useRouter();
    const [privacy, setPrivacy] = useState<string>("Privado");
    const [chat, setChat] = useState<string>("Básico");

    return(
        <div className="creation-background">
            <div className="content-container">
                <CustomSideBar />
                <div className="card-container">
                    <div className="card">
                    <CustomRow 
                    label={"Nombre"} 
                    component={<CustomInputText value={""} placeHolder={"Nombre"} onChange={(e) => console.log(e)} hasBorder={false}/>}
                    />
                    <CustomRow 
                        label={"Privacidad"} 
                        component={ <CustomSelectorComponent value={privacy} options={["Privado", "Público"]} onChange={(value) => setPrivacy(value)}/> }
                    />
                    <CustomRow 
                        label={"Compartir Pantalla"} 
                        component={<CustomInputSwitch/>}
                    />
                    <CustomRow 
                        label={"Chat de Texto"} 
                        component={ <CustomSelectorComponent value={chat} options={["No", "Básico", "Avanzado"]} onChange={(value) => setChat(value)}/> }
                    />
                    <CustomRow 
                        label={"Sala de espera"} 
                        component={<CustomInputSwitch/>}
                    />
                    <CustomButton title={"Crear Sala"} onSubmit={() => router.push("/sign-in")}></CustomButton>
                    <CustomButton title={"Ver Salas"} onSubmit={() => router.push("/conference-list")}></CustomButton>
                    <CustomButton title={"Regresar"} onSubmit={() => router.push("/sign-in")}></CustomButton>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ConferenceCreation;
