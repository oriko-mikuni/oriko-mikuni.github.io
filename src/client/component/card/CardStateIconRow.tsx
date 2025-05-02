import React from 'react';
import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import './styles/CardStateSymbolRow.css';
import CardStateIconDisplay from "./CardStateIconDisplay.tsx";


function CardStateIconRow(
    {state}:
    {state: CardStateIcon}
): React.JSX.Element {
    return <div className="card-state-icon-row">
        <CardStateIconDisplay state={state} position="left" />
        <CardStateIconDisplay state={state} position="right" />
    </div>
}

export default CardStateIconRow;
