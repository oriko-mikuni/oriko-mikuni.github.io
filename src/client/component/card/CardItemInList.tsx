import {ClientCard} from "../../../common/cards/ClientCard";
import React from "react";
import {getCustomCardTitleColour} from "../../../common/cards/CardName.ts";
import {getSuitCardTitleColour} from "../../../common/cards/CardSuitIcon.ts";
import CardTextRender from "./CardTextRender.tsx";
import "./styles/CardItem.css";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import CardNationColourRender, {CardNationColourDisplayShape} from "./CardNationColourRender.tsx";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import {useTranslation} from "react-i18next";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";

function CardItemInList({card, onClick}: {
    card: ClientCard,
    onClick?: () => void;
}): React.JSX.Element {
    const titleColour: React.CSSProperties =
        getCustomCardTitleColour(card.name) || getSuitCardTitleColour(card.suit?.at(0));

    const suitIcons: string = card.suit.map(suit => `{${suit}}`).join("");
    // console.log(suitIcons);
    const typeIcons: string = card.typeIcon.map(type => `{${type}}`).join("");
    // console.log(typeIcons);
    const stateIcons: string = card.stateSymbol.map(state => `{${state}}`).join("");
    // console.log(stateIcons);
    const headerIcon: string = card.headerIcon !== CardHeaderIcon.NO_HEADER ? `{${card.headerIcon}}` : "";
    // console.log(headerIcon);

    const iconRenderTop: React.JSX.Element | null = <CardTextRender text={suitIcons} minimize={true}/>;
    const iconsRenderBottom: React.JSX.Element | null = <CardTextRender text={stateIcons + headerIcon + typeIcons} minimize={true}/>;

    const startingPositionIcon: string = card.startingLocation === CardStartingLocation.DEFAULT ? "" :`{${card.startingLocation}}`;

    const startingPositionRender: React.JSX.Element | null = <CardTextRender text={startingPositionIcon}/>

    const nationColour: React.JSX.Element | null =
        card.nationColour === CardNationColour.COMMON || card.nationColour === CardNationColour.COMMON_B
            ? null : <CardNationColourRender location={CardStartingLocation.DEFAULT}
                                             shape={CardNationColourDisplayShape.SQUARE}
                                             nationColour={card.nationColour}
            />;

    const {t: titleTranslation} = useTranslation("cardName");
    const titleDisplay: string = titleTranslation(card.name).toUpperCase();

    const specialExhaustCount: React.JSX.Element | null =
        card.exhaustCount === undefined ? null : <span className="card-item-special-exhaust-count text-bold">
            <CardTextRender text={card.exhaustCount + "{exhaust}"}/></span>;

    const vpIcon: React.JSX.Element | null =
        card.victoryPoints === 0 ? null : <CardVictoryPointIcon victoryPoints={card.victoryPoints} size={"20px"}/>;

    const playerCountRender: React.JSX.Element | null = card.playerCount < 2 ? null :
        <span className="card-player-count-minimal">
            <span className={`card-player-count-icon-${titleColour.color}`}/>
            {card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}
        </span>;

    return <div className="card-item" style={titleColour} onClick={onClick}>
        <div className="card-item-left">
            {nationColour}
            {iconRenderTop}
            {titleDisplay}
            <br/>
            {iconsRenderBottom}
        </div>
        <div className="card-item-right">
            {specialExhaustCount}
            {playerCountRender}
            {startingPositionRender}
            <br/>
            {vpIcon}
        </div>
    </div>
}

export default CardItemInList;
