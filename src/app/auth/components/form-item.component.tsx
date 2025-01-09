import { CustomInputText } from "@/components/custom-input-text.component";

interface IFormItemProps{
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}
export function FormItem({title, placeholder, value, onChange}: IFormItemProps){
    return (
        <div className="flex gap-1 flex-col">
            <h1 className="text-cyan-500 font-bold text-xl">{title} </h1>
            <CustomInputText value={value} placeHolder={placeholder} onChange={onChange} hasBorder={true} />               
        </div>
    )
}