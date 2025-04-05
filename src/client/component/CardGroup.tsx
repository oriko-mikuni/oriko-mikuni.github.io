import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import "./CardGroup.css";
import {ReactState} from "./common/ReactState.tsx";

function CardGroup(
    {module, cards, displayState}:
    {module: string, cards: Array<ClientCard>, displayState: ReactState<boolean>}
): React.JSX.Element {
    const cardElements: Array<React.JSX.Element> = cards.map(
        (card: ClientCard, idx: number): React.JSX.Element =>
        <div className="cardBox" key={idx}>
            <Card card={card} />
        </div>
    );
    return <div>
        <h1>
            {module}
            <button onClick={(): void => displayState[1](!displayState[0])}>
                {displayState[0] ? "collapse" : "expand"}
            </button>
        </h1>
        <div className={displayState[0] ? "cardList" : "hidden"}>
            {cardElements}
        </div>
    </div>;
}

export default CardGroup;
