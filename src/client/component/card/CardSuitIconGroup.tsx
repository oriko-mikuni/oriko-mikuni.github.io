import React from 'react';
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import './styles/CardSuitIconGroup.css';
import CardSuitIconDisplay from "./CardSuitIconDisplay.tsx";

function CardSuitIconGroup(
    {suit}:
    {suit: Array<CardSuitIcon>}
): React.JSX.Element {
    return <div className="card-suits">{
        suit.map((suit: CardSuitIcon, idx: number) =>
            <CardSuitIconDisplay suit={suit} key={idx}/>
        )
    }</div>
}

export default CardSuitIconGroup;
