import React from "react";

function InputNumber({value, onChange, width = "3em"}: {
    value: number,
    onChange: (text: number) => void,
    width?: string,
}): React.JSX.Element {
    const widthVar: React.CSSProperties & Record<string, string> = {'--input-number-width': width};
    return <input
        className="w-(--input-number-width)"
        style={widthVar}
        type="number"
        value={value}
        onChange={(e) => {
            const parsedNumber = Number.parseInt(e.target.value);
            if (!Number.isNaN(parsedNumber) && parsedNumber !== value)
                onChange(parsedNumber);
        }}
    />;
}

export default InputNumber;
