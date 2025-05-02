import {CardExpansion} from "../../../common/cards/CardExpansion.ts";
import React from "react";
import "./styles/CardExpansion.css";

function CardExpansionRender({expansion, separate = false}: {expansion: CardExpansion, separate?: boolean}): React.JSX.Element | null {
    return expansion === CardExpansion.NONE ? null :
        separate
            ? <div className={`card-expansion-${expansion}`}/>
            : <div className={`card-expansion-${expansion} card-expansion-pinned-in-a-card`}/>;
}

export default CardExpansionRender;
