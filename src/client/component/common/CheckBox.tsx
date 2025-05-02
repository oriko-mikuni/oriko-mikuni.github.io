import React from "react";

function CheckBox(
    {checked, onChange, size}:
    {checked: boolean, onChange: (state: boolean) => void, size?: string}
): React.JSX.Element {
    return <input
        type="checkbox"
        style={size ? {width: size, height: size} : {}}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
    />
}

export default CheckBox;
