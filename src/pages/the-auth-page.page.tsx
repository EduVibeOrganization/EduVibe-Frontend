import { CustomButton } from "@/components/custom-button.component";
import { CustomInputText } from "@/components/custom-input-text.component";
import { DecorationContainer } from "@/components/decoration-container.component";

export function AuthPage(){
    return (
        <div className="bg-sky-400 auth-page-container">
           <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <DecorationContainer />
                 </div>
                 <div className="flex flex-col mt-10 gap-5 lg:ml-96">
                   <h1 className="text-center text-white font-bold text-5xl"> Inicia Sesión</h1>
                   <CustomInputText value="" placeHolder={"Email"} onChange={(e) => console.log(e)}/> 
                   <CustomInputText value="" placeHolder={"Contraseña"} onChange={(e) => console.log(e)}/> 
                   <CustomButton title={"Iniciar Sesión"} onSubmit={() => console.log("Iniciar Sesión")} />
                </div>         
            </div>
        </div>
      );
}