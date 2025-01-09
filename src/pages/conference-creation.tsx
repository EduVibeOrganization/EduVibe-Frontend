import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useRouter } from "next/navigation";
import { CustomInputText } from "@/components/custom-input-text.component";
import { CustomSelectorComponent } from "@/components/custom-selector.component";
import { useState } from "react";

function ConferenceCreation(){
    const router = useRouter();
    const [privacy, setPrivacy] = useState<string>("privado");
    const [color, setColor] = useState<string>("rojo");

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
                    <h1>Colores</h1>
                    <CustomSelectorComponent
                        value={color}
                        options={["Rojo", "Azul", "Verde"]}
                        onChange={(value) => setColor(value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ConferenceCreation;
