import React from "react";
import "./CardDetailDescription.css";
import "../card/styles/CardBox.css";
import CardTextRender from "../card/CardTextRender.tsx";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import Card from "../card/Card.tsx";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";
import CardItemInList from "../card/CardItemInList.tsx";
import {getCard} from "../../cards/ClientCardsManifest.ts";

function findTooltip(card: ClientCard): Array<string> {
    const result: Array<string> = [];
    card.keywords.forEach(keyword => result.push(keyword));
    return result;
}

function getTooltipRender(card: ClientCard, t: TFunction<string, string>): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    findTooltip(card).forEach((value, index) => {
        const name: string = t(value + ".name", {defaultValue: ""});
        const description: string = t(value + ".description");
        if (name === "") return;

        result.push(<div key={index}>
            <h2><CardTextRender text={name}/></h2>
            <p><CardTextRender text={description}/></p>
        </div>);
    })
    return <>{result}</>;
}

function getRelatedCardsRender(
    card: ClientCard,
    t: TFunction<string, string>,
    clickCard: (arg0: ClientCard) => void,
    availableCards: Array<ClientCard>
): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    card.relatedCards.forEach((value, index) => {
        const card: ClientCard | undefined = getCard(value);
        if (card === undefined) return;
        if (!availableCards.includes(card)) return;
        result.push(<div className="cardBox">
            <CardItemInList key={index} card={card} onClick={() => clickCard(card)}/>
        </div>);
    });

    if (result.length === 0) return <></>;

    return <>
        <h2>{t("Related Cards")}</h2>
        {result}
    </>;
}

function CardDetailDescription(
    {card, closeDialog, clickCard, availableCards}:
    {card?: ClientCard, closeDialog: () => void, clickCard: (arg0: ClientCard) => void, availableCards: Array<ClientCard>}
): React.JSX.Element {
    if (card === undefined) {
        return <></>
    }
    const {t} = useTranslation("tooltip", {keyPrefix: "tooltip"});
    const {t: t1} = useTranslation("tooltip");
    return <div>
        <div className="CardDetailDialogOverlay" onClick={closeDialog} key="overlay"></div>
        <div className="CardDetailDialog" key="dialog">
            <button onClick={closeDialog} key="close">x</button>
            <span className="cardBox centerAlign" key="card">
                <Card card={card}/>
            </span>
            {getTooltipRender(card, t)}
            {getRelatedCardsRender(card, t1, clickCard, availableCards)}
        </div>
    </div>;
}

export default CardDetailDescription;
