import React from 'react';
import {ClientCard} from "../../../common/cards/ClientCard";
import CardTitle from "./CardTitle"
import CardSuitIconGroup from "./CardSuitIconGroup.tsx";
import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import CardStateIconRow from "./CardStateIconRow.tsx";
import CardTypeIconGroup from "./CardTypeIconGroup.tsx";
import CardHeaderIconDisplay from "./CardHeaderIconDisplay.tsx";
import CardNationColourRender, {CardNationColourDisplayShape} from "./CardNationColourRender.tsx";
import {CardEffectTextBox} from "./CardEffectTextBox.tsx";
import CardVictoryPoints from "./CardVictoryPoints.tsx";
import {GameModule} from "../../../common/cards/GameModule.ts";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import CardExpansionRender from "./CardExpansionRender.tsx";
import {CardInPlayType} from "../../../common/cards/CardInPlayType.ts";
import {CardModel} from "../../../common/model/CardModel.ts";
import {UnitsUtils} from "../../../common/Units.ts";
import CardTextRender from "./CardTextRender.tsx";
import {getCard} from "../../cards/ClientCardsManifest.ts";

function getCardClasses(card: ClientCard, isReactive: boolean): string {
    const classes: Array<string> = [
        'm-[5px] relative bg-[#555555]',
        'w-[250px] h-[350px] bg-size-[250px_350px]',
        'border-2 border-lt-none-rb-solid rounded-[15px] border-[#888888]',
        'force-content-box'];
    if (isReactive) classes.push("transition-transform hover:scale-105 hover:cursor-pointer hover:z-50");
    if (card.cardInPlayType === CardInPlayType.STATE) classes.push("state-card");
    else if (card.cardInPlayType === CardInPlayType.POWER) classes.push("power-card");
    else if (card.cardInPlayType === CardInPlayType.PERMANENT) classes.push("permanent-card");
    else classes.push("bg-illustration-placeholder");

    return classes.join(' ');
}

function Card(
    {customClientCard, onClick, cardModel = {}}:
    {customClientCard?: ClientCard, onClick?: () => void, cardModel?: CardModel}
): React.JSX.Element {
    const cardInstance: ClientCard | undefined = customClientCard ?? (cardModel.name ? getCard(cardModel.name) : undefined);
    if (!cardInstance) return <></>;

    const topContents: Array<React.JSX.Element> = [];

    topContents.push(<CardTitle
        title={cardInstance.name}
        banner={cardInstance.suit.at(0)}
        key="cardTitle"
        diy={cardInstance.gameModule === GameModule.DEFAULT}
        exhaustCount={cardInstance.exhaustCount}
    />);

    if (cardInstance.headerIcon !== CardHeaderIcon.NO_HEADER) {
        topContents.push(<CardHeaderIconDisplay headerIcon={cardInstance.headerIcon} position="left" key="cardHeaderIconLeft"/>);
        topContents.push(<CardHeaderIconDisplay headerIcon={cardInstance.headerIcon} position="right" key="cardHeaderIconRight"/>);
    }

    topContents.push(<CardTypeIconGroup type={cardInstance.typeIcon} key="card-types"/>);

    cardInstance.stateSymbol.forEach((state: CardStateIcon, index: number) => {
        topContents.push(<CardStateIconRow key={`card-state-symbol-${index}`} state={state} />)
    });

    const playerCountRender: React.JSX.Element | null = cardInstance.playerCount < 2 ? null :
    <div>
        <div className="absolute left-[35px] bottom-[22px] size-[12px] bg-cover bg-card-player-count-white"/>
        <div className="absolute left-[45px] bottom-[20px] text-[10px] text-white">{cardInstance.playerCount.toString() + (cardInstance.playerCount < 4 ? "+" : "")}</div>
    </div>;

    const exhaustedRender: React.JSX.Element | null = !cardModel.isExhausted ? null :
        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[60px] h-[60px] bg-cover bg-card-resource-exhaust"/>;
    const resourceUponString: string = UnitsUtils.resourcesUponToString(UnitsUtils.of(cardModel.resourcesUpon ?? {}));
    const resourceUponRender: React.JSX.Element | null = !resourceUponString ? null :
        <div className="absolute w-full text-center top-[150px] text-[25px] text-white">
            <CardTextRender text={resourceUponString}/>
        </div>

    const backgroundStyle: React.CSSProperties | undefined = cardInstance.illustration ? {backgroundImage: `url("${cardInstance.illustration}")`} : undefined;
    return <div className={getCardClasses(cardInstance, onClick !== undefined)} style={backgroundStyle} onClick={onClick}>
        <div className="relative">{topContents}</div>
        <CardSuitIconGroup suit={cardInstance.suit}/>
        <CardEffectTextBox
            effectText={cardInstance.effectText}
            developmentCost={cardInstance.developmentCost}
            developmentCostString={cardInstance.developmentCostString}
            diy={cardInstance.gameModule === GameModule.DEFAULT}
        />
        <CardNationColourRender
            nationColour={cardInstance.nationColour}
            location={cardInstance.startingLocation}
            shape={CardNationColourDisplayShape.TRIANGLE}
            nationColourImageFile={cardInstance.nationColourFile}
            diy={cardInstance.gameModule === GameModule.DEFAULT}
        />
        <CardVictoryPoints
            victoryPoints={cardInstance.victoryPoints}
            victoryPointString={cardInstance.victoryPointsString}
            diy={cardInstance.gameModule === GameModule.DEFAULT}
        />
        <div className="absolute left-[40px] bottom-[10px] text-[10px] text-white">{cardInstance.cardNumber}</div>
        <CardExpansionRender expansion={cardInstance.expansion} position='bottomLeft'/>
        {playerCountRender}
        {exhaustedRender}
        {resourceUponRender}
    </div>;
}

export default Card;
