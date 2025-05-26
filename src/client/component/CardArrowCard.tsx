import {ClientCard} from "../../common/cards/ClientCard";
import React from "react";
import Card from "./card/Card.tsx";
import CardItemInList from "./card/CardItemInList.tsx";

function CardArrowCard({cardL, cardR, onClickACard, minimize}: {
    cardL: ClientCard,
    cardR: ClientCard,
    onClickACard?: (arg0: ClientCard) => void,
    minimize: boolean
}): React.JSX.Element {
    if (minimize)
        return <div className="flex items-center justify-center">
            <div className="cardBox">
                <CardItemInList card={cardL} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardL)}/>
            </div>
            <div className="bg-misc-arrow w-[100px] h-[40px] bg-cover"/>
            <div className="cardBox">
                <CardItemInList card={cardR} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardR)}/>
            </div>
        </div>;
    return <div className="flex items-center justify-center">
        <div className="cardBox">
            <Card card={cardL} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardL)}/>
        </div>
        <div className="bg-misc-arrow w-[100px] h-[40px] bg-cover"/>
        <div className="cardBox">
            <Card card={cardR} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardR)}/>
        </div>
    </div>;
}

export default CardArrowCard;
