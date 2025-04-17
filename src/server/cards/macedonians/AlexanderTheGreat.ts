import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class AlexanderTheGreat extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALEXANDER_THE_GREAT,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC6",
            effectText: [
                "Cannot be played unless [Alexander] is in your history.",
                "Free play. You MAY acquire {region} twice, including from exiled cards.",
                cardEffectReuse.selfHistory
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
