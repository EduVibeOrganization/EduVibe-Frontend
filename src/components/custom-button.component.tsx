
import { Button } from 'primereact/button';
        
interface IButtonProps {
    title: string;
    onSubmit: () => void;
}

export function CustomButton({title, onSubmit} : IButtonProps) {
    return (
        <Button 
        label={title}
        className='bg-white text-cyan-500 font-bold p-3 rounded-xl'
        onClick={onSubmit}
         text raised
    
         />
    )
}