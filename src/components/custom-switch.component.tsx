import React from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { CustomSwitchProps } from './custom-switch.props';

export const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
    return (
        <div>
            <InputSwitch
                checked={value}
                onChange={(e) => onChange(e.value)}
            />
        </div>
    );
};