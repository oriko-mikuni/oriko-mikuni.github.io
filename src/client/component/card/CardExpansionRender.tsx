import {CardExpansion} from "../../../common/cards/CardExpansion.ts";
import React from "react";

type CardExpansionPosition = 'inline' | 'bottomLeft' | 'bottomRightMin';

const cardExpansionStyle: Record<CardExpansionPosition, string> = {
    'inline': "size-[24px] bg-cover text-transparent bg-card-expansion-",
    'bottomLeft': "absolute left-[25px] bottom-[25px] size-[10px] bg-cover bg-card-expansion-",
    'bottomRightMin': "absolute right-[25px] bottom-[4px] size-[10px] bg-cover rounded-full border border-white border-solid bg-card-expansion-"
}

function CardExpansionRender({expansion, position = 'inline'}: {
    expansion: CardExpansion,
    position?: CardExpansionPosition
}): React.JSX.Element | null {
    return expansion === CardExpansion.NONE ? null :
        <div className={cardExpansionStyle[position] + expansion}>{position === 'inline' ? expansion[0] : ""}</div>;
}

export default CardExpansionRender;
