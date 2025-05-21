import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import React from "react";

type TypeIconPosition = 'card-top' | 'inline';

function CardTypeIconDisplay(
    {type, position = 'card-top'}:
    {type?: CardTypeIcon, position?: TypeIconPosition}
): React.JSX.Element {
    return <div className={`size-[24px] bg-cover rounded-full object-cover text-transparent bg-card-type-${type}`}>
        {position === 'inline' ? '?' : null}
    </div>;
}

export default CardTypeIconDisplay;
