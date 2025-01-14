import React, { useState } from 'react'; 
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';

interface ICustomInputSwitch {
    onChange: (value: boolean) => void;
}

export function CustomInputSwitch ({onChange}: ICustomInputSwitch) {
    const [checked, setChecked] = useState(false);

    function setValue(e: InputSwitchChangeEvent) {
        setChecked(e.value);
        onChange(e.value);
    }

    return(
        <div>
            <InputSwitch checked={checked} onChange={(e) => setValue(e)} />
        </div>
    );
}