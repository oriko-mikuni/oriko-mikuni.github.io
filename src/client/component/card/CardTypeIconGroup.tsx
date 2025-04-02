import React from 'react';
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import './styles/CardTypeIconGroup.css';

function CardTypeIconGroup(
    {type}:
    {type: Array<CardTypeIcon>}
): React.JSX.Element {
    return <div className="card-types">{
        type.map((type: CardTypeIcon, idx: number) =>
            <div className={`card-type-icon card-type-icon-${type}`} key={idx} />
        )
    }</div>
}

export default CardTypeIconGroup;
