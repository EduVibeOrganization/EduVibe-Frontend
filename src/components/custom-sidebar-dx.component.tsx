import { useRouter } from "next/navigation";
import "../app/assets/styles/sidebar.css";
import "../app/assets/styles/public.css";
import { SidebarItem2 } from "./custom-sidebar-item-2";
import Cookies from "js-cookie";

interface ICustomSidebarDX {
    mainBackgroundColor?: string;
    headerBackgroundColor?: string;
    headerTextColor?: string;
    headerIconColor?: string;
    sidebarItems: React.ReactNode;
}

export function CustomSidebarDX({mainBackgroundColor, headerBackgroundColor, headerTextColor, headerIconColor, sidebarItems}: ICustomSidebarDX){
    const router = useRouter();
    function onSignOut(){
        Cookies.remove("token");
        Cookies.remove("id");
       router.push("/sign-in");
    }
    return (
        <div className="sidebar" style={{backgroundColor: mainBackgroundColor}}>
            <header className="sidebar-header" style={{backgroundColor: headerBackgroundColor}}>
                <i className="pi pi-database logo-icon" style={{color: headerIconColor, fontSize: "2rem"}}/>
                <h1 style={{color: headerTextColor}}>HANDIN</h1>
            </header>
            <div className="sidebar-content">
                {sidebarItems}
                <SidebarItem2 icon={"pi pi-sign-out"} title={"Salir"} onClick={onSignOut} textColor="white" backgroundAccentColor="#da0000" textAccentColor="white"/>
            </div>
        </div>
    )
}