import React, { useEffect, useState } from 'react'; 
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';

interface ICustomInputSwitch {
    onChange: (value: boolean) => void;
    initialValue?: boolean;
}

export function CustomInputSwitch({ onChange, initialValue = false }: ICustomInputSwitch) {
    const [checked, setChecked] = useState(initialValue);

    useEffect(() => {
        setChecked(initialValue);
    }, [initialValue]);

    function setValue(e: InputSwitchChangeEvent) {
        setChecked(e.value);
        onChange(e.value);
    }

    return (
        <div>
            <InputSwitch checked={checked} onChange={(e) => setValue(e)} />
        </div>
    );
}