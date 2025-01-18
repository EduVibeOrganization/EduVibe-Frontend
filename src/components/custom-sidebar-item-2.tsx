import "../app/assets/styles/sidebar.css";

interface SidebarItem2 {
    icon:string;
    title: string;
    onClick: () => void;
}

export function SidebarItem2({title, icon, onClick}: SidebarItem2) {
    return (
        <div className="sidebar-item">
            <button className="sidebar-button" onClick={onClick}>
                <i className={icon} style={{ fontSize: '1.5rem' }}/>
                <div>
                    <h6>{title}</h6>
                </div>
            </button>
        </div>
    )
}