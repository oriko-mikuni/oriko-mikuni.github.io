import React from 'react';
import {ClientCard} from "../../../common/cards/ClientCard";
import CardTitle from "./CardTitle"
import './styles/Card.css';
import CardSuitIconGroup from "./CardSuitIconGroup.tsx";
import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import CardStateSymbolRow from "./CardStateSymbolRow.tsx";
import CardTypeIconGroup from "./CardTypeIconGroup.tsx";
import CardHeaderIcon from "./CardHeaderIconDisplay.tsx";
import CardNationColourRender, {CardNationColourStyle} from "./CardNationColourRender.tsx";
import {CardEffectTextBox} from "./CardEffectTextBox.tsx";
import CardVictoryPoints from "./CardVictoryPoints.tsx";

function getCardClasses(card: ClientCard, onClick?: () => void): string {
    const classes =['filterDiv'];
    if (onClick !== undefined)
        classes.push("card-reactive");

    classes.push(`card-name-${card.name.toLowerCase().replace(/[ #,]/g, '-')}`);

    return classes.join(' ');
}

function Card(
    {card, onClick}:
    {card: ClientCard, onClick?: () => void}
): React.JSX.Element {
    const topContents: Array<React.JSX.Element> = [];

    const cardTitle: React.JSX.Element = <CardTitle title={card.name} banner={card.suit.at(0)} key="cardTitle" />;
    topContents.push(cardTitle);

    if (card.headerIcon !== undefined) {
        topContents.push(<CardHeaderIcon headerIcon={card.headerIcon} position="left" key="cardHeaderIconLeft"/>);
        topContents.push(<CardHeaderIcon headerIcon={card.headerIcon} position="right" key="cardHeaderIconRight"/>);
    }

    topContents.push(<CardTypeIconGroup type={card.typeIcon} key="card-types"/>);

    card.stateSymbol.forEach((state: CardStateIcon, index: number) => {
        topContents.push(<CardStateSymbolRow key={`card-state-symbol-${index}`} state={state} />)
    });

    const playerCountRender: React.JSX.Element | null = card.playerCount === undefined ? null :
    <div>
        <div className="card-player-count-background"/>
        <div className="card-player-count-text">{card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}</div>
    </div>;
    const expansionRender: React.JSX.Element | null = card.expansion === undefined ? null :
        <div className={`card-expansion-${card.expansion}`}/>;

    return <div className={getCardClasses(card, onClick)} onClick={onClick}>
        <div className="card-content-wrapper">
            {topContents}
        </div>
        <CardSuitIconGroup suit={card.suit} />
        <CardEffectTextBox effectText={card.effectText} developmentCost={card.developmentCost} developmentCostString={card.developmentCostString}/>
        <CardNationColourRender nationColour={card.nationColour} location={card.startingLocation} style={CardNationColourStyle.TRIANGLE}/>
        <CardVictoryPoints victoryPoints={card.victoryPoints} victoryPointString={card.victoryPointsString}/>
        <div className="card-number">{card.cardNumber}</div>
        {playerCountRender}
        {expansionRender}
    </div>;
}

export default Card;
