import React from "react";

function InputNumber({value, onChange, height = "1em", width = "3em"}: {
    value: number,
    onChange: (text: number) => void,
    height?: string,
    width?: string,
}): React.JSX.Element {
    return <input
        type="number"
        value={value}
        onChange={(e) => {
            const parsedNumber = Number.parseInt(e.target.value);
            if (!Number.isNaN(parsedNumber) && parsedNumber !== value)
                onChange(parsedNumber);
        }}
        style={{width: width, height: height}}
    />;
}

export default InputNumber;
