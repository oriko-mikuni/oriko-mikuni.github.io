import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import "./card/styles/CardBox.css";
import "./CardGroup.css"
import {useTranslation} from "react-i18next";

function CardGroup({cards, filter, onClickACard}: {
    cards: Array<ClientCard>,
    filter: (arg0: Array<ClientCard>) => Array<ClientCard>,
    onClickACard?: (arg0: ClientCard) => void
}): React.JSX.Element {
    const filteredCards: Array<ClientCard> = filter(cards);
    const {t} = useTranslation("ui", {keyPrefix: "CardGroup"});

    const cardElements: React.JSX.Element | null = (filteredCards.length === 0) ?
        <p style={{fontSize: "20px", lineHeight: "24px"}}>
            {t("hintIfNoCardsLine1")}<br/>
            {t("hintIfNoCardsLine2")}<br/>
            {t("hintIfNoCardsLine3")}<br/>
            {t("hintIfNoCardsLine4")}<br/>
            {t("hintIfNoCardsLine5")}
        </p> :
        <div className="cardList">{
            filteredCards.map((card: ClientCard, idx: number): React.JSX.Element =>
                <div className="cardBox" key={idx}>
                    <Card card={card} onClick={onClickACard === undefined ? undefined : () => onClickACard(card)}/>
                </div>
            )
        }</div>;

    return <>
        {cardElements}
    </>;
}

export default CardGroup;
