import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import "./card/styles/CardBox.css";
import "./CardGroup.css"

function CardGroup(
    {module, cards, display, onToggle}:
    {module: string, cards: Array<ClientCard>, display: boolean, onToggle: () => void}
): React.JSX.Element {
    const cardElements: React.JSX.Element | null = !display ? null :
        <div className="cardList">{
            cards.map((card: ClientCard, idx: number): React.JSX.Element =>
                <div className="cardBox" key={idx}>
                    <Card card={card}/>
                </div>
            )
        }</div>;

    return <div>
        <h1>
            {module}
            <button onClick={onToggle}>
                {display ? "collapse" : "expand"}
            </button>
        </h1>
        {cardElements}
    </div>;
}

export default CardGroup;
