import React from 'react';
import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import CardStateIconDisplay from "./CardStateIconDisplay.tsx";

function CardStateIconRow(
    {state}:
    {state: CardStateIcon}
): React.JSX.Element {
    return <div className="relative w-full h-[27px] overflow-hidden justify-between mt-[4px]">
        <CardStateIconDisplay state={state} position="left" />
        <CardStateIconDisplay state={state} position="right" />
    </div>
}

export default CardStateIconRow;
