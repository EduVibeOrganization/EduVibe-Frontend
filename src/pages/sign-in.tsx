import { ContentIndicator } from "@/components/content-indicator.component";
import { CustomButton } from "@/components/custom-button.component";
import { CustomInputText } from "@/components/custom-input-text.component";
import { DecorationContainer } from "@/components/decoration-container.component";
import { SocialMediaButton } from "@/components/social-media-button.component";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useRouter } from "next/router";

function SignIn(){
    const router = useRouter();
    return (
        <div className="bg-sky-400 auth-page-container">
           <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <DecorationContainer />
                 </div>
                 <div className="flex flex-col justify-center items-center mt-10 gap-5 lg:ml-96">
                   <h1 className="text-center text-white font-bold text-5xl"> Inicia Sesión</h1>
                   <CustomInputText value="" placeHolder={"Email"} onChange={(e) => console.log(e)}/> 
                   <CustomInputText value="" placeHolder={"Contraseña"} onChange={(e) => console.log(e)}/> 
                   <CustomButton title={"Iniciar Sesión"} onSubmit={() => console.log("Iniciar Sesión")} />
                   <SocialMediaButton onEmitted={() => console.log("Iniciar Sesión")} icon="https://pngimg.com/uploads/google/google_PNG19635.png" background="bg-white" foreground="text-gray-500" text="Inicia Sesión con Google" isBold={false} />
                   <SocialMediaButton onEmitted={() => console.log("Iniciar Sesión")} icon="https://freelogopng.com/images/all_img/1658030243facebook-logo-white.png" background=" bg-blue-500" foreground="text-white" text="Inicia Sesión con Facebook" isBold={true} />
                   <ContentIndicator title={"Aún no tienes cuenta?"} />
                   <CustomButton title={"Registrate"} onSubmit={() => router.push("/sign-up")} />
                   <ContentIndicator title={"Olvidaste tu contraseña?"} />
                   <CustomButton title={"Recuperar cotraseña"} onSubmit={() => router.push("recover-password")} />
                </div>         
            </div>
        </div>
      );
}

export default SignIn;