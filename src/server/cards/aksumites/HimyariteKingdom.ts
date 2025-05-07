import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class HimyariteKingdom extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HIMYARITE_KINGDOM,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.AKS,
            cardNumber: "AKS5",
            effectText: [
                "Free play. Gain 2{progress} per {trade-route} you have in play.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 2},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
