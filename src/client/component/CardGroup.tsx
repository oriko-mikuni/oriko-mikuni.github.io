import {ClientCard} from "../../common/cards/ClientCard.ts";
import React, {useState} from "react";
import Card from "./card/Card.tsx";
import "./CardGroup.css";

function CardGroup(
    {module, cards}:
    {module: string, cards: Array<ClientCard>}
): React.JSX.Element {
    const [display, setDisplay] = useState(true);
    const cardElements: Array<React.JSX.Element> = cards.map(
        (card: ClientCard, idx: number): React.JSX.Element =>
        <div className="cardBox" key={idx}>
            <Card card={card} />
        </div>
    );
    return <div>
        <h1>
            {module}
            <button onClick={(): void => setDisplay(!display)}>
                {display ? "hide" : "show"}
            </button>
        </h1>
        <div className={display ? "cardList" : "hidden"}>
            {cardElements}
        </div>
    </div>;
}

export default CardGroup;
