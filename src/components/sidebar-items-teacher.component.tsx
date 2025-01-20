import { useRouter } from "next/navigation";
import { SidebarItem2 } from "./custom-sidebar-item-2";
import "../app/assets/styles/sidebar.css";

export function SidebarItemsTeacher(){
    const router = useRouter();
    const textColor = "white"
    const backgroundAccentColor = "#74cbec";
    const textAccentColor = "black";
    return (
        <div className="sidebar-content-items">
            <SidebarItem2 icon={"pi pi-home"} title={"Inicio"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/home-teacher")}/>
            <SidebarItem2 icon={"pi pi-book"} title={"Cursos"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/courses-teacher")}/>    
            <SidebarItem2 icon={"pi pi-video"} title={"Videoconferencias"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/conference-list-teacher")}/>    
            <SidebarItem2 icon={"pi pi-question-circle"} title={"Centro de Ayuda"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/help-center-teacher")}/>    
            <SidebarItem2 icon={"pi pi-user"} title={"Perfil"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/my-profile-teacher")}/>
        </div>
    );
}