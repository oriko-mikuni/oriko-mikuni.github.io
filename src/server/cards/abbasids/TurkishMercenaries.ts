import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class TurkishMercenaries extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TURKISH_MERCENARIES,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB8",
            effectText: [
                "Free play. Pay 1{goods} to choose: gain 1 action and draw a card OR you MAY draw a card garrisoned under your [Merchant Empire] and put this card into your history."
            ],
            developmentCost: {population: 4},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "3VP if in history",
            relatedCards: [
                CardName.MERCHANT_EMPIRE1,
                CardName.MERCHANT_EMPIRE2,
                CardName.MERCHANT_EMPIRE3,
                CardName.MERCHANT_EMPIRE4,
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 3 : 0;
    }
}
