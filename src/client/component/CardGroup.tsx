import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import "./card/styles/CardBox.css";
import "./CardGroup.css"

function CardGroup(
    {groupName, cards, display, onToggleOn, onToggleOff}:
    {groupName: string, cards: Array<ClientCard>, display: boolean, onToggleOn: () => void, onToggleOff: () => void}
): React.JSX.Element {
    const cardElements: React.JSX.Element | null = (!display || cards.length === 0) ? null :
        <div className="cardList">{
            cards.map((card: ClientCard, idx: number): React.JSX.Element =>
                <div className="cardBox" key={idx}>
                    <Card card={card}/>
                </div>
            )
        }</div>;

    return <div>
        <h1 style={{color: cards.length > 0 ? "black" : "grey"}}>
            {groupName}
            <button onClick={onToggleOn} style={display ? {display: "none"} : {}}>expand</button>
            <button onClick={onToggleOff} style={display ? {} : {display: "none"}}>collapse</button>
        </h1>
        {cardElements}
    </div>;
}

export default CardGroup;
