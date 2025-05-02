import React from "react";

function ButtonGroup<T>({range, ItemRender, onClick, includeVoid = false}: {
    range: Array<T>,
    ItemRender: (arg0: {arg0?: T}) => React.JSX.Element | null,
    onClick: (arg0?: T) => void,
    includeVoid?: boolean,
}): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    let size: number = 1;
    if (includeVoid) {
        const item: React.JSX.Element | null = ItemRender({});
        if (item !== null) {
            result.push(<button key={0} onClick={() => {onClick()}}>{item}</button>)
        }
    }
    range.forEach(item => {
        const itemRd: React.JSX.Element | null = ItemRender({arg0: item});
        if (itemRd !== null) {
            result.push(<button key={size} onClick={() => {onClick(item)}}>{itemRd}</button>);
            size++;
        }
    })
    return <>{result}</>;
}

export default ButtonGroup;
