import { Button } from 'primereact/button';

interface ICustomButtonDX {
    title: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    color?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    onSubmit: (e?:any) => void;
}

export function CustomButtonDX ({title, size = 'medium', color = '#06b6d4', icon, iconPosition = 'left', onSubmit} : ICustomButtonDX ) {
    const sizeClasses = {
        small: 'p-2 text-sm w-32',
        medium: 'p-3 text-base w-48',
        large: 'p-4 text-lg w-64',
        full: 'p-4 text-lg w-full',
    };

    return (
        <Button
            label={title}
            icon={icon}
            iconPos={iconPosition}
            className={`text-white font-bold rounded-xl ${sizeClasses[size]}`}
            style={{background: `${color}`}}
            onClick={onSubmit}
            outlined
            raised
        />
    )
}