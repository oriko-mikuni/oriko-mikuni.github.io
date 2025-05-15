import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {PlayerCardLocation} from "../../Player";

export class AdoptionOfIslam extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADOPTION_OF_ISLAM,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.WAG,
            cardNumber: "WAG6",
            effectText: [
                "Free play. Choose up to 2 times: return a {unrest} OR put a card from your hand or discard pile into your history.",
                "Find [Pact with Bida] (including from in play), and put it and this card into your history."
            ],
            developmentCost: {population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4 cards in your history",
            relatedCards: [
                CardName.PACT_WITH_BIDA
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(
            card => card.location === PlayerCardLocation.HISTORY
        ).length / 4);
    }
}
