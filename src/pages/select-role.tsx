import { DecorationContainer } from "@/components/decoration-container.component";
import { useRouter } from "next/navigation";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { RoleCard } from "@/components/role-card.component";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/store";
import { AuthService } from "@/services/auth.service";
import { SignUpDTO } from "@/models/sign-up.dto";
import { setRoleId } from "@/store/slices/authSlice";
function SelectRole(){
    const router = useRouter();
    const [authSevice] = useState<AuthService>(new AuthService());
    const dispatch = useDispatch();
    const { signUpModel } = useSelector((state: RootState) => state.auth);
    const handleRegister = async () => {
       if(!signUpModel.roleId){
            alert("Por favor selecciona un rol");
            return;
        }
        try{
            const userToRegister = new SignUpDTO(signUpModel.email, signUpModel.password, signUpModel.username, signUpModel.phoneNumber, "" ,signUpModel.roleId);
            await authSevice.signUp(userToRegister);
            router.push("/sign-in");
        } catch (_){
          alert("Ha ocurrido un error al registrar el usuario");
        }
    }
    return (
        <div className="bg-sky-400 page-size">
            <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <DecorationContainer />
                 </div>
                 <div className="flex flex-col justify-center items-center mt-24 lg:mt-32 gap-5 lg:ml-96">
                   <h1 className="text-center text-white font-bold text-3xl lg:text-5xl"> ¿Cómo deseas usar HANDIN?</h1>
                   <div className="flex flex-col lg:flex-row gap-5 mt-20 lg:mt-28">
                     <RoleCard title="Estudiante" icon="https://cdn0.iconfinder.com/data/icons/education-line-circle-1/614/243_-_Male_Student-512.png" description="Accede a los mejores cursos y ponencias para mejorar tus habilidades." onClick={ () => dispatch(setRoleId(2))}/>
                     <RoleCard title="Profesor/Ponente" icon="https://cdn.discordapp.com/attachments/1315846437950722109/1326686732455772270/profesor.png?ex=678054cd&is=677f034d&hm=ed3c8b19b52200c5a4596a31f784859a80da7bb8bb9e39937fc37808c942091e&" description="Publica tus cursos o organiza ponencias para compartir tus conocimiento." onClick={ () => dispatch(setRoleId(3))}/>
                   </div>
                   <div className="flex flex-col lg:flex-row gap-3 lg:ml-96">
                        <button className="bg-cyan-700 text-white font-bold text-md  px-5 py-2 rounded-lg mt-5" onClick={() => router.push("/sign-up")}> Regresar </button>
                        <button className="bg-white text-sky-400 font-bold text-md px-5  py-2 rounded-lg mt-5" onClick={() => handleRegister()}>Registrar</button>
                   </div>
                </div>       
             </div>
        </div>
    )
}

export default SelectRole;