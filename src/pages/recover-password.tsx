import { ContentIndicator } from "@/components/content-indicator.component";
import { CustomButton } from "@/components/custom-button.component";
import { CustomInputText } from "@/components/custom-input-text.component";
import { DecorationContainer } from "@/components/decoration-container.component";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useRouter } from "next/navigation";

function RecoverPassword(){
    const router = useRouter();
    return(
        <div className="bg-sky-400 auth-page-container">
           <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <DecorationContainer />
                 </div>
                 <div className="flex flex-col justify-center items-center mt-32 gap-5 lg:ml-96">
                   <h1 className="text-center text-white font-bold text-5xl"> Recuperar contraseña</h1>
                   <CustomInputText value="" placeHolder={"Email"} onChange={(e) => console.log(e)} hasBorder={false}/> 
                   <CustomInputText value="" placeHolder={"Contraseña"} onChange={(e) => console.log(e)} hasBorder={false}/> 
                   <CustomButton title={"Recuperar Contraseña"} onSubmit={() => router.push("/confirm-password")} />
                    <div className="ml-20 mt-16">
                      <ContentIndicator title={"Deseas volver al inicio de sesión?"} />
                    </div>
                   <div className="mt-16">
                    <CustomButton title={"Iniciar Sesión"} onSubmit={() => router.push("/sign-in")} />
                   </div>
                </div>         
            </div>
        </div>
    )
}

export default RecoverPassword;