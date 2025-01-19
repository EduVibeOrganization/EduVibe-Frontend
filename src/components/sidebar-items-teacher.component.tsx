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
            <SidebarItem2 icon={"pi pi-home"} title={"Inicio"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/home-student")}/>
            <SidebarItem2 icon={"pi pi-book"} title={"Cursos"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/courses-teacher")}/>    
            <SidebarItem2 icon={"pi pi-video"} title={"Videoconferencias"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/conference-list-teacher")}/>    
            <SidebarItem2 icon={"pi pi-receipt"} title={"Transacciones"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/home-teacher")}/>
            <SidebarItem2 icon={"pi pi-question-circle"} title={"Centro de Ayuda"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/help-center-teacher")}/>    
            <SidebarItem2 icon={"pi pi-user"} title={"Perfil"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/my-profile")}/>
            <SidebarItem2 icon={"pi pi-cog"} title={"Administración"} textColor={textColor} backgroundAccentColor={backgroundAccentColor} textAccentColor={textAccentColor} onClick={() => router.push("/admin-authorization")}/>    
        </div>
    );
}

/*
<CustomSidebarDX
                    sidebarItems={<SidebarItemsTeacher />}
                    mainBackgroundColor="#01465E"
                    headerBackgroundColor="#012a39"
                    headerTextColor="white"
                    headerIconColor="#23A8E1"
                />
 */