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

function getCardClasses(card: ClientCard): string {
    const classes =['filterDiv'];

    classes.push(`card-name-${card.name.toLowerCase().replace(/[ #,]/g, '-')}`);

    return classes.join(' ');
}

function Card(
    {card}:
    {card: ClientCard}
): React.JSX.Element {
    const cardContents: Array<React.JSX.Element> = [];

    const cardTitle: React.JSX.Element = <CardTitle title={card.name} banner={card.suit.at(0)} key="cardTitle" />;
    cardContents.push(cardTitle);

    if (card.headerIcon !== undefined) {
        cardContents.push(<CardHeaderIcon headerIcon={card.headerIcon} position="left" key="cardHeaderIconLeft"/>);
        cardContents.push(<CardHeaderIcon headerIcon={card.headerIcon} position="right" key="cardHeaderIconRight"/>);
    }

    cardContents.push(<CardTypeIconGroup type={card.typeIcon} key="card-types"/>);

    card.stateSymbol.forEach((state: CardStateIcon, index: number) => {
        cardContents.push(<CardStateSymbolRow key={`card-state-symbol-${index}`} state={state} />)
    });

    const playerCountRender: React.JSX.Element | null = card.playerCount === undefined ? null :
    <div>
        <div className="card-player-count-background"/>
        <div className="card-player-count-text">{card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}</div>
    </div>;
    const expansionRender: React.JSX.Element | null = card.expansion === undefined ? null :
        <div className={`card-expansion-${card.expansion}`}/>;

    return <div className={getCardClasses(card)}>
        <div className="card-content-wrapper">
            {cardContents}
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
