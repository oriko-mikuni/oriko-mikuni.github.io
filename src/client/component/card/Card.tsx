import React from 'react';
import {ClientCard} from "../../../common/cards/ClientCard";
import CardTitle from "./CardTitle"
import './styles/Card.css';
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

    topContents.push(<CardTitle
        title={card.name}
        banner={card.suit.at(0)}
        key="cardTitle"
        diy={card.gameModule === GameModule.DEFAULT}
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
        <div className="card-player-count-background"/>
        <div className="card-player-count-text">{card.playerCount.toString() + (card.playerCount < 4 ? "+" : "")}</div>
    </div>;
    const expansionRender: React.JSX.Element | null = <CardExpansionRender expansion={card.expansion}/>;
    const backgroundStyle: React.CSSProperties | undefined = !card.illustration ? undefined :
        {backgroundImage: `url("${card.illustration}")`, backgroundSize: "250px 350px"};

    return <div className={getCardClasses(card, onClick)} style={backgroundStyle} onClick={onClick}>
        <div className="card-content-wrapper">
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
            nationColourImageURL={card.nationColourURL}
        />
        <CardVictoryPoints
            victoryPoints={card.victoryPoints}
            victoryPointString={card.victoryPointsString}
            diy={card.gameModule === GameModule.DEFAULT}
        />
        <div className="card-number">{card.cardNumber}</div>
        {playerCountRender}
        {expansionRender}
    </div>;
}

export default Card;
