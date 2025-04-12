import React from 'react';
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import './styles/CardTypeIconGroup.css';
import CardTypeIconDisplay from "./CardTypeIconDisplay.tsx";

function CardTypeIconGroup(
    {type}:
    {type: Array<CardTypeIcon>}
): React.JSX.Element {
    return <div className="card-types">{
        type.map((type: CardTypeIcon, idx: number) =>
            <CardTypeIconDisplay type={type} key={idx} />
        )
    }</div>
}

export default CardTypeIconGroup;
