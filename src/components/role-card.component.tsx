interface IRoleCardProps{
    title: string;
    icon: string;
    description: string;
    onClick: () => void;
}

export function RoleCard({title, icon, description, onClick}: IRoleCardProps){
    return (
        <div className="flex flex-col items-center gap-7 bg-white p-5 rounded-xl w-80 cursor-pointer hover:border-cyan-600 hover:border-2" onClick={onClick}>
            <img src={icon} alt={title} className="w-20 h-20"/>
            <h1 className="text-xl font-bold text-cyan-500">{title}</h1>
            <p className="text-center text-sm text-gray-500">{description}</p>
        </div>
    )

}