
import { InputText } from 'primereact/inputtext';
interface ICustomInputTextProps {
    value: string;
    placeHolder: string;
    onChange: (value: string) => void;
}

export function CustomInputText({value, onChange, placeHolder}: ICustomInputTextProps) {
  return (
    <InputText
    className='w-96 rounded-xl bg-white'
    style={{ padding: '0.5rem', width: '100%'}} 
      placeholder={placeHolder}
      value= {value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}