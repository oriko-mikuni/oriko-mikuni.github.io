import React from 'react';
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol.ts";
import './styles/CardStateSymbolRow.css';
import CardStateSymbolDisplay from "./CardStateSymbolDisplay.tsx";


function CardStateSymbolRow(
    {state}:
    {state: CardStateSymbol}
): React.JSX.Element {
    return <div className="card-state-symbol-row">
        <CardStateSymbolDisplay state={state} position="left" />
        <CardStateSymbolDisplay state={state} position="right" />
    </div>
}

export default CardStateSymbolRow;
