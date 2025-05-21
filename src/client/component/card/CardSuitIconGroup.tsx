import React from 'react';
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import CardSuitIconDisplay from "./CardSuitIconDisplay.tsx";

function CardSuitIconGroup(
    {suit}:
    {suit: Array<CardSuitIcon>}
): React.JSX.Element {
    return <div className="absolute bottom-[5px] flex gap-[4px] left-1/2 -translate-x-1/2">{
        suit.map((suit: CardSuitIcon, idx: number) =>
            <CardSuitIconDisplay suit={suit} key={idx}/>
        )
    }</div>
}

export default CardSuitIconGroup;
