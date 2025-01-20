
import { InputText } from 'primereact/inputtext';
interface ICustomInputTextProps {
    value: string;
    placeHolder: string;
    hasBorder: boolean;
    onChange: (value: any) => void;
}

export function CustomInputText({value, onChange, placeHolder, hasBorder}: ICustomInputTextProps) {
  return (
    <InputText
    className={` w-80 lg:w-96 text-xs lg:text-sm rounded-xl bg-white  ${hasBorder ? 'border-2 border-gray-300' : ''}`}
    style={{ padding: '0.5rem' }} 
      placeholder={placeHolder}
      value= {value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}