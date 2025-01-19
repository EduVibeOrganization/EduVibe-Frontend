import { useRouter } from "next/navigation";
import { SidebarItem2 } from "./custom-sidebar-item-2";

export function SidebarItemsStudent(){
    const router = useRouter();
    return (
        <div className="sidebar-content-items">
            <SidebarItem2 icon={"pi pi-home"} title={"Inicio"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/home-student")}/>
            <SidebarItem2 icon={"pi pi-book"} title={"Cursos"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/courses")}/>    
            <SidebarItem2 icon={"pi pi-video"} title={"Videoconferencias"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/conference-creation")}/>    
            <SidebarItem2 icon={"pi pi-receipt"} title={"Transacciones"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/home-student")}/>    
            <SidebarItem2 icon={"pi pi-question-circle"} title={"Centro de Ayuda"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-social-account")}/>    
            <SidebarItem2 icon={"pi pi-user"} title={"Perfil"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/help-center")}/> 
            <SidebarItem2 icon={"pi pi-cog"} title={"Administración"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-authorization")}/>    
        </div>
    );
}