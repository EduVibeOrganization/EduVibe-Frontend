

interface ISidebarItem {
    icon:string;
    title: string;
    onClick: () => void;
}

export function SidebarItem({title, icon, onClick} : ISidebarItem){
    return (
        <button className="flex flex-col items-center lg:flex-row gap-2 w-32 text-xs lg:text-sm bg-transparent hover:rounded-xl p-2 hover:bg-white" onClick={onClick}>
            <img src={icon} alt={title} className="h-3 w-3 lg:h-6 lg:w-6" />
            <h6>{title}</h6>
        </button>
     )
    }