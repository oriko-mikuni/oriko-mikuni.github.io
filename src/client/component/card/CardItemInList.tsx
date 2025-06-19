import {ClientCard} from "../../../common/cards/ClientCard";
import React from "react";
import {getCustomCardTitleColour} from "../../../common/cards/CardName.ts";
import {getSuitCardTitleColour} from "../../../common/cards/CardSuitIcon.ts";
import CardTextRender, {CardTextRenderSharedProps} from "./CardTextRender.tsx";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import CardNationColourRender, {CardNationColourDisplayShape} from "./CardNationColourRender.tsx";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import {useTranslation} from "react-i18next";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";
import CardExpansionRender from "./CardExpansionRender.tsx";
import {UnitsUtils} from "../../../common/Units.ts";
import {CardModel} from "../../../common/model/CardModel.ts";
import {getCard} from "../../cards/ClientCardsManifest.ts";

function getCardClasses(titleColour: string, isReactive: boolean): string {
    const classes: Array<string> = [
        "force-content-box",
        "relative m-[5px]",
        "w-[280px] h-[40px]",
        "text-[15px] font-bold whitespace-nowrap overflow-hidden",
        "pl-[5px] py-[4px] rounded-[8px]",
        "group/card",
        titleColour];
    if (isReactive) classes.push("transition-transform hover:scale-105 hover:cursor-pointer hover:z-50");
    return classes.join(" ");
}

function CardItemInList({customClientCard, onClick, cardModel = {}}: {
    customClientCard?: ClientCard,
    onClick?: () => void,
    cardModel?: CardModel,
}): React.JSX.Element {
    const clientCard: ClientCard | undefined = customClientCard ?? (cardModel.name ? getCard(cardModel.name) : undefined);
    if (!clientCard) return <></>;

    const titleColour: string =
        getCustomCardTitleColour(clientCard.name) || getSuitCardTitleColour(clientCard.suit?.at(0));
    const titleTextColorMatch: RegExpMatchArray | null = titleColour.match(/text-(\S+)/);
    const titleTextColor: string = titleTextColorMatch ? titleTextColorMatch[1] : "white";
    const textProps: CardTextRenderSharedProps = {minimize: true, isBlack: titleTextColor === "black"};

    const suitIcons: string = clientCard.suit.map(suit => `{${suit}}`).join("");
    const typeIcons: string = clientCard.typeIcon.map(type => `{${type}}`).join("");
    const stateIcons: string = clientCard.stateSymbol.map(state => `{${state}}`).join("");
    const headerIcon: string = clientCard.headerIcon !== CardHeaderIcon.NO_HEADER ? `{${clientCard.headerIcon}}` : "";

    const iconRenderTop: React.JSX.Element | null = <CardTextRender text={suitIcons} {...textProps}/>;
    const iconsRenderBottom: React.JSX.Element | null = <CardTextRender text={headerIcon + stateIcons + typeIcons} {...textProps}/>;

    const startingPositionIcon: string = clientCard.startingLocation === CardStartingLocation.DEFAULT ? "" :`{${clientCard.startingLocation}}`;
    const startingPositionRender: React.JSX.Element | null = <CardTextRender text={startingPositionIcon} {...textProps}/>

    const nationColour: React.JSX.Element | null =
        clientCard.nationColour === CardNationColour.COMMON || clientCard.nationColour === CardNationColour.COMMON_B
            ? null : <CardNationColourRender location={CardStartingLocation.DEFAULT}
                                             shape={CardNationColourDisplayShape.MINIMAL_SQUARE}
                                             nationColour={clientCard.nationColour}/>;

    const {t: titleTranslation} = useTranslation("cardName");
    const titleDisplay: string = titleTranslation(clientCard.name).toUpperCase();

    const specialExhaustCount: React.JSX.Element | null =
        clientCard.exhaustCount === undefined ? null : <span className="inline-block text-white font-bold">
            <CardTextRender text={clientCard.exhaustCount + "{exhaust}"} {...textProps}/></span>;

    const vpIcon: React.JSX.Element | null =
        clientCard.victoryPoints === 0 ? null : <CardVictoryPointIcon victoryPoints={clientCard.victoryPoints} size={"20px"}/>;

    const exhaustedRender: React.JSX.Element | null = !cardModel.isExhausted ? null :
        <div className="absolute left-[100px] top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-cover bg-card-resource-exhaust opacity-70 group-hover/card:opacity-100"/>;
    const resourceUponString: string = UnitsUtils.resourcesUponToString(UnitsUtils.of(cardModel.resourcesUpon ?? {}));
    const resourceUponRender: React.JSX.Element | null = !resourceUponString ? null :
        <div className="absolute text-right right-[80px] top-[4px] leading-[20px] opacity-70 group-hover/card:opacity-100">
            <br/><CardTextRender text={resourceUponString}/>
        </div>

    return <div className={getCardClasses(titleColour, onClick !== undefined)} onClick={onClick}>
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
        <div className={`absolute right-[40px] bottom-[2px] text-[10px] text-${titleTextColor}`}>
            {clientCard.cardNumber}
        </div>
        {exhaustedRender}
        {resourceUponRender}
        {(clientCard.playerCount >= 2) && <span className="absolute text-[10px] right-[25px] bottom-[16px]">
            <span className={`inline-block align-middle size-[10px] bg-cover bg-card-player-count-${titleTextColor}`}/>
            {clientCard.playerCount.toString() + (clientCard.playerCount < 4 ? "+" : "")}
        </span>}
        <CardExpansionRender expansion={clientCard.expansion} position='bottomRightMin'/>
    </div>
}

export default CardItemInList;
