import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import {useTranslation} from "react-i18next";
import CardItemInList from "./card/CardItemInList.tsx";
import {ItemGroup} from "./common/ItemGroup.tsx";

function CardGroup({cards, filter, onClickACard, minimize, groupName}: {
    groupName?: string;
    cards: Array<ClientCard>,
    filter?: (arg0: Array<ClientCard>) => Array<ClientCard>,
    onClickACard?: (arg0: ClientCard) => void,
    minimize: boolean,
}): React.JSX.Element {
    const filteredCards: Array<ClientCard> = filter ? filter(cards) : cards;
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
        const CardRender: ({item}: {item: ClientCard}) => React.JSX.Element = onClickACard === undefined
            ? (minimize
                    ? ((props: {item: ClientCard}): React.JSX.Element =>
                        <div className="cardBox"><CardItemInList card={props.item}/></div>)
                    : ((props: {item: ClientCard}): React.JSX.Element =>
                        <div className="cardBox"><Card card={props.item}/></div>)
            ) : (minimize
                    ? ((props: {item: ClientCard}): React.JSX.Element =>
                        <div className="cardBox"><CardItemInList card={props.item} onClick={() => onClickACard(props.item)}/></div>)
                    : ((props: {item: ClientCard}): React.JSX.Element =>
                        <div className="cardBox"><Card card={props.item} onClick={() => onClickACard(props.item)}/></div>)
            );

        return <ItemGroup groupName={groupName} items={filteredCards} ItemRender={CardRender}/>;
    }
}

export default CardGroup;
