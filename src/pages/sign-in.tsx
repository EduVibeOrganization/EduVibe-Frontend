"use client";
import { useRouter } from "next/navigation";
import { ContentIndicator } from "@/components/content-indicator.component";
import { CustomButton } from "@/components/custom-button.component";
import { CustomInputText } from "@/components/custom-input-text.component";
import { DecorationContainer } from "@/components/decoration-container.component";
import { SocialMediaButton } from "@/components/social-media-button.component";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useState } from "react";
import { SignInDTO } from "@/models/sign-in.dto";
import { AuthService } from '../services/auth.service';



function SignIn(){
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [authService] = useState<AuthService>(new AuthService());
    const handleLogin = async () => {
       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailRegex.test(email)){
            alert("Por favor ingresa un email válido");
            return;
        }
        if(password.length < 8){
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }
        const userToAuthenticate = new SignInDTO(email, password);
        try{
          await authService.signIn(userToAuthenticate).then((response) => {
            const token = response.data.token;
            const id = response.data.id;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("id", id);
          });

          alert("Has iniciado sesión correctamente!!");
          router.push("/home-student");
        } catch (_){
          alert("Credenciales incorrectas, por favor intenta de nuevo");
        }

        
    }
    return (
        <div className="bg-sky-400 page-size">
           <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <DecorationContainer />
                 </div>
                 <div className="flex flex-col justify-center items-center mt-10 gap-5 lg:ml-96">
                   <h1 className="text-center text-white font-bold text-5xl"> Inicia Sesión</h1>
                   <CustomInputText value={email} placeHolder={"Email"} onChange={(e) => setEmail(e)} hasBorder={false}/> 
                   <CustomInputText value={password} placeHolder={"Contraseña"} onChange={(e) => setPassword(e)} hasBorder={false}/> 
                   <CustomButton title={"Iniciar Sesión"} onSubmit={() => handleLogin()} />
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