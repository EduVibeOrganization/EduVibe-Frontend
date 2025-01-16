interface ICustomRow {
    label: React.ReactNode;
    component: React.ReactNode;
}

export function CustomRow({ label, component }: ICustomRow) {
    return (
        <div className="flex items-center w-full gap-5">
            <h1 className="w-1/3 text-right">{label}</h1>
            <div className="w-2/3">{component}</div>
        </div>
    );
}
