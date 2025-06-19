import React from "react";
import Card from "./card/Card.tsx";
import CardItemInList from "./card/CardItemInList.tsx";
import {CardName} from "../../common/cards/CardName.ts";

function CardArrowCard({cardL, cardR, onClickACard, minimize}: {
    cardL: CardName,
    cardR: CardName,
    onClickACard?: (arg0: CardName) => void,
    minimize: boolean,
}): React.JSX.Element {
    if (minimize)
        return <div className="flex items-center justify-center">
            <div className="cardBox">
                <CardItemInList cardModel={{name: cardL}} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardL)}/>
            </div>
            <div className="bg-misc-arrow w-[100px] h-[40px] bg-cover"/>
            <div className="cardBox">
                <CardItemInList cardModel={{name: cardR}} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardR)}/>
            </div>
        </div>;
    return <div className="flex items-center justify-center">
        <div className="cardBox">
            <Card cardModel={{name: cardL}} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardL)}/>
        </div>
        <div className="bg-misc-arrow w-[100px] h-[40px] bg-cover"/>
        <div className="cardBox">
            <Card cardModel={{name: cardR}} onClick={onClickACard === undefined ? undefined : () => onClickACard(cardR)}/>
        </div>
    </div>;
}

export default CardArrowCard;
