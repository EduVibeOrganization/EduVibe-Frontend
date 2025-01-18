import { useRouter } from "next/router";
import { SidebarItem } from "./sibebar-item.component";

import "../app/assets/styles/sidebar.css";
import "../app/assets/styles/public.css";
import { SidebarItem2 } from "./custom-sidebar-item-2";

export function CustomSidebarAdmin(){
    const router = useRouter();
    return (
        <div className="sidebar">
            <SidebarItem2 icon={"pi pi-shield"} title={"Autenticación y Autorización"} onClick={() => router.push("/admin-authorization")}/>
            <SidebarItem2 icon={"pi pi-shopping-cart"} title={"Compras"} onClick={() => router.push("/admin-shopping")}/>    
            <SidebarItem2 icon={"pi pi-at"} title={"Contacto"} onClick={() => router.push("/admin-contact")}/>    
            <SidebarItem2 icon={"pi pi-users"} title={"Cuentas"} onClick={() => router.push("/admin-account")}/>    
            <SidebarItem2 icon={"pi pi-share-alt"} title={"Cuentas Sociales"} onClick={() => router.push("/admin-social-account")}/>    
            <SidebarItem2 icon={"pi pi-book"} title={"Libro de Reclamaciones"} onClick={() => router.push("/admin-complains-book")}/>    
            <SidebarItem2 icon={"pi pi-unlock"} title={"Política de Privacidad"} onClick={() => router.push("/admin-privacy-policy")}/>    
            <SidebarItem2 icon={"pi pi-question-circle"} title={"Preguntas Frecuentes"} onClick={() => router.push("/admin-qa")}/>
            <SidebarItem2 icon={"pi pi-desktop"} title={"Sitios"} onClick={() => router.push("/admin-sites")}/>
            <SidebarItem2 icon={"pi pi-info-circle"} title={"Términos y condiciones"} onClick={() => router.push("/admin-terms-conditions")}/>
            <SidebarItem2 icon={"pi pi-user"} title={"Usuario"} onClick={() => router.push("/admin-user")}/>
        </div>
    )
}