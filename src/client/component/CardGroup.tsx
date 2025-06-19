import React from "react";
import Card from "./card/Card.tsx";
import {useTranslation} from "react-i18next";
import CardItemInList from "./card/CardItemInList.tsx";
import {ItemGroup} from "./common/ItemGroup.tsx";
import {CardName} from "../../common/cards/CardName.ts";

function CardGroup({cards, filter, onClickACard, minimize, groupName}: {
    groupName?: string;
    cards: Array<CardName>,
    filter?: (arg0: Array<CardName>) => Array<CardName>,
    onClickACard?: (arg0: CardName) => void,
    minimize: boolean,
}): React.JSX.Element {
    const filteredCards: Array<CardName> = filter ? filter(cards) : cards;
    const {t} = useTranslation("ui", {keyPrefix: "CardGroup"});

    if (filteredCards.length === 0) {
        return groupName !== undefined ? <></> :
            <p className="text-[16px] leading-[20px]">
                {t("hintIfNoCardsLine1")}<br/>
                {t("hintIfNoCardsLine2")}<br/>
                {t("hintIfNoCardsLine3")}<br/>
                {t("hintIfNoCardsLine4")}<br/>
                {t("hintIfNoCardsLine5")}
            </p>;
    } else {
        const CardRender: ({item}: {item: CardName}) => React.JSX.Element = onClickACard === undefined
            ? (minimize
                    ? ((props: {item: CardName}): React.JSX.Element =>
                        <div className="cardBox"><CardItemInList cardModel={{name: props.item}}/></div>)
                    : ((props: {item: CardName}): React.JSX.Element =>
                        <div className="cardBox"><Card cardModel={{name: props.item}}/></div>)
            ) : (minimize
                    ? ((props: {item: CardName}): React.JSX.Element =>
                        <div className="cardBox"><CardItemInList cardModel={{name: props.item}} onClick={() => onClickACard(props.item)}/></div>)
                    : ((props: {item: CardName}): React.JSX.Element =>
                        <div className="cardBox"><Card cardModel={{name: props.item}} onClick={() => onClickACard(props.item)}/></div>)
            );

        return <ItemGroup groupName={groupName} items={filteredCards} ItemRender={CardRender}/>;
    }
}

export default CardGroup;
