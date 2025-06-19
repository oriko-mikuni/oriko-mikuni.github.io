import {ClientCard} from "../../../common/cards/ClientCard.ts";
import React from "react";
import {useTranslation} from "react-i18next";
import Card from "../card/Card.tsx";
import {TFunction} from "i18next";
import {getCard} from "../../cards/ClientCardsManifest.ts";
import CardItemInList from "../card/CardItemInList.tsx";
import CardTextRender, {CardTextRenderSharedProps} from "../card/CardTextRender.tsx";
import {CardName} from "../../../common/cards/CardName.ts";

function getTooltipRender(card: ClientCard, t: TFunction<string, string>, textProps: CardTextRenderSharedProps): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    card.keywords.forEach((value, index) => {
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
    clickCard: (arg0: CardName) => void,
    availableCards: Array<CardName>
): React.JSX.Element {
    const result: Array<React.JSX.Element> = [];
    card.relatedCards.forEach((value, index) => {
        if (!availableCards.includes(value)) return;
        result.push(<div className="cardBox" key={index}>
            <CardItemInList
                cardModel={{name: value}}
                onClick={() => clickCard(value)}/>
        </div>);
    });

    if (result.length === 0) return <></>;

    return <>
        <div className="text-xl font-bold">{t("Related Cards")}</div>
        <div className="flex flex-wrap">{result}</div>
    </>;
}

export function CardDetailDescription({cardName, clickCard, availableCards, isTextBlack}: {
    cardName: CardName,
    clickCard?: (arg0: CardName) => void,
    availableCards: Array<CardName>,
    isTextBlack: boolean,
}): React.JSX.Element {
    const {t} = useTranslation("tooltip", {keyPrefix: "tooltip"});
    const {t: t1} = useTranslation("tooltip");

    const cardInstance: ClientCard | undefined = getCard(cardName);
    if (!cardInstance) return <></>;

    return <div>
        <span className="cardBox text-center justify-center" key="card">
            <Card cardModel={{name: cardName}}/>
        </span>
        {getTooltipRender(cardInstance, t, {isBlack: isTextBlack})}
        {clickCard && getRelatedCardsRender(cardInstance, t1, clickCard, availableCards)}
    </div>;
}
