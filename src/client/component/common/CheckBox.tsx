import React from "react";

function CheckBox(
    {checked, onChange, size = "1em"}:
    {checked: boolean, onChange: (state: boolean) => void, size?: string}
): React.JSX.Element {
    const sizeVar: React.CSSProperties & Record<string, string> = {'--check-box-size': size};
    return <input
        type="checkbox"
        className="size-(--check-box-size)"
        style={sizeVar}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
    />
}

export default CheckBox;
