import { useRouter } from "next/navigation";
import { SidebarItem2 } from "./custom-sidebar-item-2";
import "../app/assets/styles/sidebar.css";

export function SidebarItemsAdmin(){
    const router = useRouter();
    return (
        <div className="sidebar-content-items">
            <SidebarItem2 icon={"pi pi-shield"} title={"Autenticación y Autorización"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-authorization")}/>
            <SidebarItem2 icon={"pi pi-shopping-cart"} title={"Compras"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-shopping")}/>    
            <SidebarItem2 icon={"pi pi-at"} title={"Contacto"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-contact")}/>    
            <SidebarItem2 icon={"pi pi-users"} title={"Cuentas"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-account")}/>    
            <SidebarItem2 icon={"pi pi-share-alt"} title={"Cuentas Sociales"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-social-account")}/>    
            <SidebarItem2 icon={"pi pi-calendar"} title={"Evento"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-event")}/> 
            <SidebarItem2 icon={"pi pi-book"} title={"Libro de Reclamaciones"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-complains-book")}/>    
            <SidebarItem2 icon={"pi pi-unlock"} title={"Política de Privacidad"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-privacy-policy")}/>    
            <SidebarItem2 icon={"pi pi-question-circle"} title={"Preguntas Frecuentes"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-qa")}/>
            <SidebarItem2 icon={"pi pi-desktop"} title={"Sitios"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-sites")}/>
            <SidebarItem2 icon={"pi pi-info-circle"} title={"Términos y condiciones"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-terms-conditions")}/>
            <SidebarItem2 icon={"pi pi-user"} title={"Usuario"} textColor="#C2C7D0" backgroundAccentColor="#007BFF" textAccentColor="white" onClick={() => router.push("/admin-user")}/>
        </div>
    );
}