import "../app/assets/styles/sidebar.css";

interface ISidebarItem2 {
    icon:string;
    title: string;
    textColor: string;
    backgroundAccentColor: string;
    textAccentColor: string;
    onClick: () => void;
}

export function SidebarItem2({title, icon, textColor, backgroundAccentColor, textAccentColor, onClick}: ISidebarItem2) {
    return (
        <div
            className="sidebar-item"
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = backgroundAccentColor;
                const button = e.currentTarget.querySelector('.sidebar-button') as HTMLButtonElement;
                if (button) button.style.color = textAccentColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                const button = e.currentTarget.querySelector('.sidebar-button') as HTMLButtonElement;
                if (button) button.style.color = textColor;
            }}
        >
            <button className="sidebar-button" onClick={onClick} style={{ color: textColor }}>
                <i className={icon} style={{ fontSize: '1.5rem' }} />
                <span className="item-title">{title}</span>
            </button>
        </div>
    );
}