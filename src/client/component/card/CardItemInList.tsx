import {ClientCard} from "../../../common/cards/ClientCard";
import React from "react";
import {getCustomCardTitleColour} from "../../../common/cards/CardName.ts";
import {getSuitCardTitleColour} from "../../../common/cards/CardSuitIcon.ts";
import CardTextRender from "./CardTextRender.tsx";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import CardNationColourRender, {CardNationColourDisplayShape} from "./CardNationColourRender.tsx";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import {useTranslation} from "react-i18next";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";
import CardExpansionRender from "./CardExpansionRender.tsx";

function CardItemInList({card, onClick}: {
    card: ClientCard,
    onClick?: () => void;
}): React.JSX.Element {
    const titleColour: string =
        getCustomCardTitleColour(card.name) || getSuitCardTitleColour(card.suit?.at(0));
    const titleTextColorMatch: RegExpMatchArray | null = titleColour.match(/text-(\S+)/);
    const titleTextColor: string = titleTextColorMatch ? titleTextColorMatch[1] : "white";

    const suitIcons: string = card.suit.map(suit => `{${suit}}`).join("");
    const typeIcons: string = card.typeIcon.map(type => `{${type}}`).join("");
    const stateIcons: string = card.stateSymbol.map(state => `{${state}}`).join("");
    const headerIcon: string = card.headerIcon !== CardHeaderIcon.NO_HEADER ? `{${card.headerIcon}}` : "";

    const iconRenderTop: React.JSX.Element | null = <CardTextRender text={suitIcons} minimize={true}/>;
    const iconsRenderBottom: React.JSX.Element | null = <CardTextRender text={headerIcon + stateIcons + typeIcons} minimize={true}/>;

    const startingPositionIcon: string = card.startingLocation === CardStartingLocation.DEFAULT ? "" :`{${card.startingLocation}}`;
    const startingPositionRender: React.JSX.Element | null = <CardTextRender text={startingPositionIcon} minimize={true} isBlack={titleTextColor === "black"}/>

    const nationColour: React.JSX.Element | null =
        card.nationColour === CardNationColour.COMMON || card.nationColour === CardNationColour.COMMON_B
            ? null : <CardNationColourRender location={CardStartingLocation.DEFAULT}
                                             shape={CardNationColourDisplayShape.MINIMAL_SQUARE}
                                             nationColour={card.nationColour}/>;

    const {t: titleTranslation} = useTranslation("cardName");
    const titleDisplay: string = titleTranslation(card.name).toUpperCase();

    const specialExhaustCount: React.JSX.Element | null =
        card.exhaustCount === undefined ? null : <span className="inline-block text-white font-bold">
            <CardTextRender text={card.exhaustCount + "{exhaust}"} minimize={true}/></span>;

    const vpIcon: React.JSX.Element | null =
        card.victoryPoints === 0 ? null : <CardVictoryPointIcon victoryPoints={card.victoryPoints} size={"20px"}/>;

    return <div
        className={"force-content-box relative w-[280px] h-[40px] font-bold whitespace-nowrap overflow-hidden m-[5px] pl-[5px] py-[4px] rounded-[8px] " + titleColour}
        onClick={onClick}
    >
        <div className="absolute text-left left-[5px] top-[4px] leading-[20px]">
            {nationColour}
            {iconRenderTop}
            {titleDisplay}
            <br/>
            {iconsRenderBottom}
        </div>
        <div className="absolute text-right right-[5px] top-[4px] leading-[20px]">
            {specialExhaustCount}
            {startingPositionRender}
            <br/>
            {vpIcon}
        </div>
        {(card.playerCount >= 2) && <span className="absolute text-[10px] right-[25px] bottom-[16px]">
            <span className={`inline-block align-middle size-[10px] bg-cover bg-card-player-count-${titleTextColor}`}/>
            {card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}
        </span>}
        <CardExpansionRender expansion={card.expansion} position='bottomRightMin'/>
    </div>
}

export default CardItemInList;
