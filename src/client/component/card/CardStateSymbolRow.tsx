import React from 'react';
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol.ts";
import './styles/CardStateSymbolRow.css';


function CardStateSymbolRow(
    {state}:
    {state: CardStateSymbol}
): React.JSX.Element {
    return <div className="card-state-symbol-row">
        <div className={`card-state-symbol-as-${state} card-state-symbol-left`} />
        <div className={`card-state-symbol-as-${state} card-state-symbol-right`} />
    </div>
}

export default CardStateSymbolRow;
