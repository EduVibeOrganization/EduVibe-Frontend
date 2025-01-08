interface ISocialMediaButtonProps {
    onEmitted: () => void;
    icon: string; 
    background: string; 
    foreground: string; 
    text: string; 
    isBold: boolean;
}

export function SocialMediaButton({
    onEmitted,
    icon,
    background,
    foreground,
    text,
    isBold
}: ISocialMediaButtonProps) {
    return (
        <button
            onClick={onEmitted}
            className={`w-96 p-3 flex items-center justify-start gap-2 rounded-md transition-all duration-200 hover:opacity-90  ${background} ${ isBold ? 'font-bold' : 'font-normal'}`}
            aria-label={`Social media button: ${text}`}
        >
            <img src={icon} alt={`${text} icon`} className="h-6 w-6" />
            <span className={`text-sm font-medium ${foreground}`}>{text}</span>
        </button>
    );
}
