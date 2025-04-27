import React from "react";
import "./CardDetailDescription.css";
import "../card/styles/CardBox.css";
import {RenderCardText} from "../card/CardText.tsx";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import Card from "../card/Card.tsx";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

function findTooltip(card: ClientCard): Array<string> {
    const result: Array<string> = [card.name];
    card.keywords?.forEach(keyword => result.push(keyword));
    return result;
}

function getTooltipRender(card: ClientCard, t: TFunction<string, string>): Array<React.JSX.Element> {
    return findTooltip(card).map((value, index) => {
        const name: string = t(value + ".name", {defaultValue: ""});
        const description: string = t(value + ".description");
        if (name === "")
            return <></>;
        return <div key={index}>
            <h2>{RenderCardText(name)}</h2>
            <p>{RenderCardText(description)}</p>
        </div>;
    });
}

function CardDetailDescription(
    {card, closeDialog}:
    {card?: ClientCard, closeDialog: () => void}
): React.JSX.Element {
    if (card === undefined) {
        return <></>
    }
    const {t} = useTranslation("tooltip", {keyPrefix: "tooltip"});
    return <div>
        <div className="CardDetailDialogOverlay" onClick={closeDialog}></div>
        <div className="CardDetailDialog">
            <button onClick={closeDialog}>x</button>
            <span className="cardBox centerAlign">
                <Card card={card}/>
            </span>
            {getTooltipRender(card, t)}
        </div>
    </div>;
}

export default CardDetailDescription;
