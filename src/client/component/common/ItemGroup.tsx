import React from "react";

export function ItemGroup<T>({groupName, items, ItemRender, gap}: {
    groupName?: string,
    items: Array<T>,
    ItemRender: ({item}: {item: T}) => React.JSX.Element,
    gap?: string,
}): React.JSX.Element {
    if (gap === undefined)
        return <>
            {groupName !== undefined ? <h2>{groupName}</h2> : null}
            <div className={"flex flex-wrap"}>{
                items.map((item: T, idx: number): React.JSX.Element => <ItemRender item={item} key={idx}/>)
            }</div>
        </>;

    const gapVar: React.CSSProperties & Record<string, string> = {"--gap": gap};
    return <>
        {groupName !== undefined ? <h2>{groupName}</h2> : null}
        <div className={"flex flex-wrap gap-x-[var(--gap)]"} style={gapVar}>{
            items.map((item: T, idx: number): React.JSX.Element => <ItemRender item={item} key={idx}/>)
        }</div>
    </>;
}
