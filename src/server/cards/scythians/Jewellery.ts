import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Jewellery extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JEWELLERY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY6",
            effectText: [
                CardEffectReuse.unplayable,
                CardEffectReuse.cannotGarrison
            ],
            developmentCost: {material: 7},
            victoryPoints: 7,
        });
    }
}
