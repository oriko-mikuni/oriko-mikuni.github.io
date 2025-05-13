import React from "react";

function InputTextBox({value, onChange, height = "1.3em", width = "24em", allowBr = false, placeholder = ""}: {
    value: string,
    onChange: (text: string) => void,
    height?: string,
    width?: string,
    allowBr?: boolean,
    placeholder?: string
}): React.JSX.Element {
    if (!allowBr)
        return <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{width: width, height: height}}
            placeholder={placeholder}
        />;
    return <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{width: width, resize: "vertical"}}
        placeholder={placeholder}
    />;
}

export default InputTextBox;
