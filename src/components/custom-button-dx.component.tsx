import { Button } from 'primereact/button';

interface ICustomButtonDX {
    title: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    color?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    onSubmit: () => void;
}

export function CustomButtonDX ({title, size = 'medium', color = 'cyan-500', icon, iconPosition = 'left', onSubmit} : ICustomButtonDX ) {
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
            className={`bg-${color} text-white font-bold rounded-xl ${sizeClasses[size]}`}
            onClick={onSubmit}
            outlined
            raised
        />
    )
}