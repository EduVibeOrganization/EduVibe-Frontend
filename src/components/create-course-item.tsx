import { CustomInputText } from "./custom-input-text.component";

interface ICreateCourseItemProps {
    title: string;
    description: string;
    placeholder: string;
    value: any;
    onChange: (e: string) => void;

}
export function CreateCourseItem({value,title, description, placeholder, onChange} : ICreateCourseItemProps) {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl"> {title}</h1>
            <p className="text-lg"> {description}</p>
            <CustomInputText value={value} placeHolder={placeholder} hasBorder={true} onChange={onChange}/>
        </div>
    )
}