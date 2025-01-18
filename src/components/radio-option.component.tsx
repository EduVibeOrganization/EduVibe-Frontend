import React from "react";

interface RadioOption {
    value: string;
    label: string;
}

interface RadioOptionsProps {
    name: string;
    value: string;
    options: RadioOption[];
    onChange: (value: string) => void;
    direction?: "horizontal" | "vertical";
    className?: string;
}

export const RadioOptions: React.FC<RadioOptionsProps> = ({
                                                              name,
                                                              value,
                                                              options,
                                                              onChange,
                                                              direction = "horizontal",
                                                              className = "",
                                                          }) => {
    const containerClasses =
        direction === "horizontal"
            ? `flex items-center space-x-6 ${className}`
            : `flex flex-col space-y-2 ${className}`;

    return (
        <div className={containerClasses}>
            {options.map((option) => (
                <label key={option.value} className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={() => onChange(option.value)}
                        className="form-radio text-blue-500"
                    />
                    <span className="text-gray-800">{option.label}</span>
                </label>
            ))}
        </div>
    );
};