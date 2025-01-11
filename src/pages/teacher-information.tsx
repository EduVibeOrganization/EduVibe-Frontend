import { AuthIndicatorDecoration } from "@/app/auth/components/auth-indicator-decoration";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { FormItem } from "@/app/auth/components/form-item.component";
function TeacherInformation(){
    return (
        <div className="bg-sky-400 page-size">
             <div className="flex justify-center items-center ">
                 <div className="hidden lg:block">
                    <AuthIndicatorDecoration 
                        title={"HANDIN"}
                        subtitle={"Selecciona 3 o más categorias de tu interés para personalizar tu experiencia"}
                        isEnable={false}
                         onClick={() => {}}
                               />
                 </div>
                 <div className="bg-white mt-20 flex flex-col gap-2 px-8 py-8 rounded-xl form-size lg:ml-96 ">
                    <FormItem title={"Título Académico"} placeholder={"Ejemplo: Licenciado en Ingeniería de Software"} value={""} onChange={() => {}} />
                    <FormItem title={"Experiencia Laboral"} placeholder={"Describa tu experiencia profesional"} value={""} onChange={() => {}} />
                    <FormItem title={"Sube tu CV (PDF)"} placeholder={""} value={""} onChange={() => {}} />
                 </div>
            </div>
        </div>
    )
}

export default TeacherInformation;