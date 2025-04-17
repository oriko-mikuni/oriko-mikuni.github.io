import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Parmenion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PARMENION,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC4",
            effectText: [
                "You MAY acquire {region}/{tributary} and immediately free play it.",
                cardEffectReuse.selfHistory
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 2,
        });
    }
}
