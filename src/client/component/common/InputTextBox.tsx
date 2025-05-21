import React from "react";

function InputTextBox({value, onChange, width = "24em", allowBr = false, placeholder = ""}: {
    value: string,
    onChange: (text: string) => void,
    width?: string,
    allowBr?: boolean,
    placeholder?: string
}): React.JSX.Element {
    const widthVar: React.CSSProperties & Record<string, string> = {'--input-text-box-width': width};
    if (!allowBr)
        return <input
            type="text"
            className="w-(--input-text-box-width)"
            style={widthVar}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />;
    return <textarea
        className="w-(--input-text-box-width) resize-y"
        style={widthVar}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
    />;
}

export default InputTextBox;
