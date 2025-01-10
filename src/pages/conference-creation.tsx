import "../app/globals.css";
import "../app/assets/styles/public.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useRouter } from "next/navigation";
import { CustomInputText } from "@/components/custom-input-text.component";
import { CustomSelectorComponent } from "@/components/custom-selector.component";
import { useState } from "react";
import { CustomInputSwitch } from "@/components/custom-input-switch.component";

function ConferenceCreation(){
    const router = useRouter();
    const [privacy, setPrivacy] = useState<string>("privado");

    return(
        <div className="bg-gray-300 auth-page-container">
            <div className="flex flex-col justify-center items-center mt-10 gap-5 lg:ml-96">
                <CustomInputText value={""} placeHolder={"Nombre"} onChange={(e) => console.log(e)}/>
                <CustomInputText value={""} placeHolder={"Privacidad"} onChange={(e) => console.log(e)}/>
                <div>
                    <h1>Privacidad</h1>
                    <CustomSelectorComponent
                        value={privacy}
                        options={["Privado", "Público"]}
                        onChange={(value) => setPrivacy(value)}
                    />
                </div>
                <div>
                    <h1>Compartir Pantalla</h1>
                    <CustomInputSwitch/>
                </div>
            </div>
        </div>
    );
}

export default ConferenceCreation;
