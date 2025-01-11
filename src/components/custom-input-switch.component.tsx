import React, { useState } from 'react'; 
import { InputSwitch } from 'primereact/inputswitch';
import "../app/assets/styles/conference-creation.css"

export function CustomInputSwitch (){
    const [checked, setChecked] = useState(false);
    return(
        <div>
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}