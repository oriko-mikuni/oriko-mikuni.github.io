import React from 'react';
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import CardTypeIconDisplay from "./CardTypeIconDisplay.tsx";

function CardTypeIconGroup(
    {type}:
    {type: Array<CardTypeIcon>}
): React.JSX.Element {
    return <div className="flex absolute mt-[4px] gap-[4px] left-1/2 -translate-x-1/2">{
        type.map((type: CardTypeIcon, idx: number) =>
            <CardTypeIconDisplay type={type} key={idx} />
        )
    }</div>
}

export default CardTypeIconGroup;
