import {ClientCard} from "../../../common/cards/ClientCard.ts";
import React from "react";
import {useTranslation} from "react-i18next";
import Card from "../card/Card.tsx";
import {TFunction} from "i18next";
import {getCard} from "../../cards/ClientCardsManifest.ts";
import CardItemInList from "../card/CardItemInList.tsx";
import CardTextRender, {CardTextRenderSharedProps} from "../card/CardTextRender.tsx";

function findTooltip(card: ClientCard): Array<string> {
    const result: Array<string> = [];
    card.keywords.forEach(keyword => result.push(keyword));
    return result;
}

function getTooltipRender(card: ClientCard, t: TFunction<string, string>, textProps: CardTextRenderSharedProps): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    findTooltip(card).forEach((value, index) => {
        const name: string = t(value + ".name", {defaultValue: ""});
        const description: string = t(value + ".description");
        if (name === "") return;

        result.push(<div key={index}>
            <div className="text-xl font-bold"><CardTextRender text={name} {...textProps}/></div>
            <div className="indent-[2em]"><CardTextRender text={description} {...textProps}/></div>
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
        result.push(<div className="cardBox" key={index}>
            <CardItemInList card={card} onClick={() => clickCard(card)}/>
        </div>);
    });

    if (result.length === 0) return <></>;

    return <>
        <div className="text-xl font-bold">{t("Related Cards")}</div>
        <div className="flex flex-wrap">{result}</div>
    </>;
}

export function CardDetailDescription({card, clickCard, availableCards, isTextBlack}: {
    card: ClientCard,
    clickCard?: (arg0: ClientCard) => void,
    availableCards: Array<ClientCard>,
    isTextBlack: boolean,
}): React.JSX.Element {
    const {t} = useTranslation("tooltip", {keyPrefix: "tooltip"});
    const {t: t1} = useTranslation("tooltip");
    return <div>
        <span className="cardBox text-center justify-center" key="card"><Card card={card}/></span>
        {getTooltipRender(card, t, {isBlack: isTextBlack})}
        {clickCard && getRelatedCardsRender(card, t1, clickCard, availableCards)}
    </div>;
}
