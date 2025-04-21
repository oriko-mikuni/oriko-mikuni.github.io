import {ClientCard} from "../../common/cards/ClientCard.ts";
import React from "react";
import Card from "./card/Card.tsx";
import "./card/styles/CardBox.css";
import "./CardGroup.css"
import {useTranslation} from "react-i18next";
import {CardGroupDisplayState} from "./cardporiumState/GroupingDisplayState.tsx";

function CardGroup(
    {groupState, filter, onToggleOn, onToggleOff}:
    {
        groupState: CardGroupDisplayState,
        filter: (arg0: Array<ClientCard>) => Array<ClientCard>,
        onToggleOn: () => void,
        onToggleOff: () => void}
): React.JSX.Element {
    const {t: moduleTranslation} = useTranslation("moduleName");
    const {t: cardGroupUITranslation} = useTranslation("ui", {keyPrefix: "CardGroup"});

    const filteredCards: Array<ClientCard> = filter(groupState.cards);

    const cardElements: React.JSX.Element | null = (!groupState.display || filteredCards.length === 0) ? null :
        <div className="cardList">{
            filteredCards.map((card: ClientCard, idx: number): React.JSX.Element =>
                <div className="cardBox" key={idx}>
                    <Card card={card}/>
                </div>
            )
        }</div>;

    return <>
        <h2 style={{color: filteredCards.length > 0 ? "black" : "grey"}}>
            {moduleTranslation(groupState.groupName)}
            <button onClick={onToggleOn} style={groupState.display ? {display: "none"} : {}}>{cardGroupUITranslation("expand")}</button>
            <button onClick={onToggleOff} style={groupState.display ? {} : {display: "none"}}>{cardGroupUITranslation("collapse")}</button>
        </h2>
        {cardElements}
    </>;
}

export default CardGroup;
