import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GlassWorking extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLASS_WORKING,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.MERCHANT, CardTypeIcon.PRODUCTION, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ABB4",
            effectText: [
                "Passive: when you pay with {goods}, add them to this card instead of returning them to the supply.",
                "Solstice: you MAY gain 1{goods} from this card."
            ],
            developmentCost: {material: 4, population: 2},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2{goods} here",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((param.resourceUpon.goods ?? 0) / 2);
    }
}
