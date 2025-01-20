import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/assets/styles/sidebar.css";
import { SidebarItem2 } from "./custom-sidebar-item-2";

interface ICustomSidebarDX {
    mainBackgroundColor?: string;
    headerBackgroundColor?: string;
    headerTextColor?: string;
    headerIconColor?: string;
    sidebarItems: React.ReactNode;
}

export function CustomSidebarDX({ mainBackgroundColor, headerBackgroundColor, headerTextColor, headerIconColor, sidebarItems }: ICustomSidebarDX) {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <button
                className="toggle-btn"
                onClick={toggleSidebar}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
            >
                ☰
            </button>
            <div
                className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
                style={{ backgroundColor: mainBackgroundColor }}
                onMouseEnter={() => setIsExpanded(true)}  // Expande cuando el ratón entra
                onMouseLeave={() => setIsExpanded(false)} // Colapsa cuando el ratón sale
            >
                <header
                    className="sidebar-header"
                    style={{ backgroundColor: headerBackgroundColor }}
                >
                    <i
                        className="pi pi-database logo-icon"
                        style={{ color: headerIconColor, fontSize: "2rem" }}
                    />
                    {isExpanded && (
                        <h1 style={{ color: headerTextColor }}>HANDIN</h1>
                    )}
                </header>
                <div className="sidebar-content">
                    {sidebarItems}
                    <SidebarItem2 icon={"pi pi-sign-out"} title={"Salir"} onClick={() => router.push("/sign-in")} textColor="white" backgroundAccentColor="#da0000" textAccentColor="white" />
                </div>
            </div>
        </>
    );
}
