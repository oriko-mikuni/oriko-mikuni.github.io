import React from "react";

export function ItemGroup<T>({groupName, items, ItemRender}: {
    groupName?: string,
    items: Array<T>,
    ItemRender: ({item}: {item: T}) => React.JSX.Element
}): React.JSX.Element {
    return <>
        {groupName !== undefined ? <h2>{groupName}</h2> : null}
        <div className="flex flex-wrap">{
            items.map((item: T, idx: number): React.JSX.Element => <ItemRender item={item} key={idx}/>)
        }</div>
    </>;
}
