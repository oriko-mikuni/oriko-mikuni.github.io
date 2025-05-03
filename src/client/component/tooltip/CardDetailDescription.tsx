import React from "react";
import "./CardDetailDescription.css";
import "../card/styles/CardBox.css";
import CardTextRender from "../card/CardTextRender.tsx";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import Card from "../card/Card.tsx";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

function findTooltip(card: ClientCard): Array<string> {
    const result: Array<string> = [];
    card.keywords?.forEach(keyword => result.push(keyword));
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

function CardDetailDescription(
    {card, closeDialog}:
    {card?: ClientCard, closeDialog: () => void}
): React.JSX.Element {
    if (card === undefined) {
        return <></>
    }
    const {t} = useTranslation("tooltip", {keyPrefix: "tooltip"});
    return <div>
        <div className="CardDetailDialogOverlay" onClick={closeDialog} key="overlay"></div>
        <div className="CardDetailDialog" key="dialog">
            <button onClick={closeDialog} key="close">x</button>
            <span className="cardBox centerAlign" key="card">
                <Card card={card}/>
            </span>
            {getTooltipRender(card, t)}
        </div>
    </div>;
}

export default CardDetailDescription;
