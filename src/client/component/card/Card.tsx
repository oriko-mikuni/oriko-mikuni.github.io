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

function getCardClasses(card: ClientCard, onClick?: () => void): string {
    const classes: Array<string> = [
        'm-[5px] relative bg-[#555555]',
        'w-[250px] h-[350px] bg-size-[250px_350px]',
        'border-2 border-lt-none-rb-solid rounded-[15px] border-[#888888]',
        'force-content-box'];
    if (onClick !== undefined) classes.push("transition-transform hover:scale-110 hover:z-50");
    if (card.cardInPlayType === CardInPlayType.STATE) classes.push("state-card");
    else if (card.cardInPlayType === CardInPlayType.POWER) classes.push("power-card");
    else if (card.cardInPlayType === CardInPlayType.PERMANENT) classes.push("permanent-card");
    else classes.push("bg-illustration-placeholder");

    classes.push(`card-name-${card.name}`);

    return classes.join(' ');
}

function Card(
    {card, onClick}:
    {card: ClientCard, onClick?: () => void}
): React.JSX.Element {
    const topContents: Array<React.JSX.Element> = [];

    topContents.push(<CardTitle
        title={card.name}
        banner={card.suit.at(0)}
        key="cardTitle"
        diy={card.gameModule === GameModule.DEFAULT}
        exhaustCount={card.exhaustCount}
    />);

    if (card.headerIcon !== CardHeaderIcon.NO_HEADER) {
        topContents.push(<CardHeaderIconDisplay headerIcon={card.headerIcon} position="left" key="cardHeaderIconLeft"/>);
        topContents.push(<CardHeaderIconDisplay headerIcon={card.headerIcon} position="right" key="cardHeaderIconRight"/>);
    }

    topContents.push(<CardTypeIconGroup type={card.typeIcon} key="card-types"/>);

    card.stateSymbol.forEach((state: CardStateIcon, index: number) => {
        topContents.push(<CardStateIconRow key={`card-state-symbol-${index}`} state={state} />)
    });

    const playerCountRender: React.JSX.Element | null = card.playerCount < 2 ? null :
    <div>
        <div className="absolute left-[35px] bottom-[22px] size-[12px] bg-cover bg-card-player-count-white"/>
        <div className="absolute left-[45px] bottom-[20px] text-[10px] text-white">{card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}</div>
    </div>;

    const backgroundStyle: React.CSSProperties | undefined = card.illustration ? {backgroundImage: `url("${card.illustration}")`} : undefined;
    return <div
        className={getCardClasses(card, onClick)}
        style={backgroundStyle}
        onClick={onClick}
    >
        <div className="relative">
            {topContents}
        </div>
        <CardSuitIconGroup
            suit={card.suit}
        />
        <CardEffectTextBox
            effectText={card.effectText}
            developmentCost={card.developmentCost}
            developmentCostString={card.developmentCostString}
            diy={card.gameModule === GameModule.DEFAULT}
        />
        <CardNationColourRender
            nationColour={card.nationColour}
            location={card.startingLocation}
            shape={CardNationColourDisplayShape.TRIANGLE}
            nationColourImageFile={card.nationColourFile}
            diy={card.gameModule === GameModule.DEFAULT}
        />
        <CardVictoryPoints
            victoryPoints={card.victoryPoints}
            victoryPointString={card.victoryPointsString}
            diy={card.gameModule === GameModule.DEFAULT}
        />
        <div className="absolute left-[40px] bottom-[10px] text-[10px] text-white">
            {card.cardNumber}
        </div>
        <CardExpansionRender expansion={card.expansion} position='bottomLeft'/>
        {playerCountRender}
    </div>;
}

export default Card;
