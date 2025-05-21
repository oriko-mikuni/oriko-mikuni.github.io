import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import React from "react";

type SuitIconPosition = 'card-bottom' | 'inline' | 'home-large';

const suitIconStyle: Record<SuitIconPosition, string> = {
    'home-large': "size-12 bg-cover rounded-full object-cover bg-card-suit-",
    'card-bottom': "size-[30px] bg-cover rounded-full object-cover bg-card-suit-",
    'inline': "size-[24px] bg-cover rounded-full object-cover text-transparent bg-card-suit-"
}

function CardSuitIconDisplay(
    {suit, position = 'card-bottom'}:
    {suit?: CardSuitIcon, position?: SuitIconPosition}
): React.JSX.Element {
    return <div className={suitIconStyle[position] + suit}>{position === 'inline' ? '?' : null}</div>
}

export default CardSuitIconDisplay;
