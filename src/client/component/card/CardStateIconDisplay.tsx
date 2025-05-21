import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import React from "react";

type StateIconPosition = 'left' | 'right' | 'inline';

const cardStatePositionStyle: Record<StateIconPosition, string> = {
    'left': "absolute bg-cover w-[33px] h-[27px] left-0 bg-card-state-",
    'right': "absolute bg-cover w-[33px] h-[27px] right-0 -scale-x-100 bg-card-state-",
    'inline': "bg-center bg-cover w-[30px] h-[24px] text-transparent bg-card-state-"
}

function CardStateIconDisplay(
    {state, position = 'inline'}:
    {state?: CardStateIcon, position?: StateIconPosition}
): React.JSX.Element {
    return <div className={cardStatePositionStyle[position] + state}>{position === 'inline' ? '?' : ""}</div>;
}

export default CardStateIconDisplay;
