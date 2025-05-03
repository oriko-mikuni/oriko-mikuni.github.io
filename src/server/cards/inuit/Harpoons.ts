import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Harpoons extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HARPOONS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU10",
            effectText: [
                CardEffectReuse.thisCannotGarrison,
                "Abandon 1 {hunt} and exile 1 {hunt} you have in play to take the top {fame} card."
            ],
            developmentCost: {population: 1},
            victoryPoints: 3,
        });
    }
}
