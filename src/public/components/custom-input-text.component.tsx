
import { InputText } from 'primereact/inputtext';
interface ICustomInputTextProps {
    value: string;
    onChange: (value: string) => void;
}

export function CustomInputText({value, onChange}: ICustomInputTextProps) {
  return (
    <InputText
      value= {value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}