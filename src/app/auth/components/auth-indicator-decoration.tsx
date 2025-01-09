interface IAuthIndicatorDecorationProps {
    title: string;
    subtitle: string;
    isEnable: boolean;
    onClick: () => void; 
}

export function AuthIndicatorDecoration({ title, subtitle, isEnable, onClick }: IAuthIndicatorDecorationProps) {
    return (
        <div className="bg-white rounded-full h-full w-full custom-container flex items-center justify-end">
            <div className="flex flex-col mr-44 font-bold text-cyan-600 text-5xl items-end gap-10">
                <h1 className="mr-16">{title}</h1>
                <h2 className="text-xl text-start w-2/6 ml-11">{subtitle}</h2>
                <button
                    className={`font-bold text-md px-5 py-2 text-sm rounded-lg mt-5 mr-36 ${
                        isEnable
                            ? "bg-cyan-600 text-white cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isEnable}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}
