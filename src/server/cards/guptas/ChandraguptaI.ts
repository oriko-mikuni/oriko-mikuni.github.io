import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class ChandraguptaI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANDRAGUPTA_I,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GUP,
            cardNumber: "GUP3",
            effectText: [
                "Cannot be played unless [Sri Gupta] is in your history.",
                "Break through for a {trade-route}/{civilised}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {goods: 1, material: 2, population: 2},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
