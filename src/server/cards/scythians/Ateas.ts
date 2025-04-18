import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Ateas extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATEAS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY3",
            effectText: [
                "You MAY acquire {region}.",
                "You MAY return an {unrest}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 4},
            victoryPoints: 3,
        });
    }
}
