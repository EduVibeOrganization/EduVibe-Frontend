import React from 'react'; 
import { RadioButton } from 'primereact/radiobutton';

import "../app/assets/styles/conference-creation.css"

interface ICustomSelectorComponent {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export function CustomSelectorComponent ({options, value,  onChange}: ICustomSelectorComponent){
    return (
        <div className="selector-container">
            {options.map((option, index) =>{
                const label = option;
                const optionValue = option;
                return (
                    <div key={index} className="selector-option">
                        <RadioButton
                            inputId={`option-${index}`}
                            value={optionValue}
                            checked={value === optionValue}
                            onChange={() => onChange(optionValue)}
                        />
                        <span className='space'/>
                        <label htmlFor={`option-${index}`}>{label}</label>
                    </div>
                );
            })}
        </div>
    );
}