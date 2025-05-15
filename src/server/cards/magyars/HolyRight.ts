import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class HolyRight extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HOLY_RIGHT,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG5",
            effectText: [
                CardEffectReuse.unplayable
            ],
            developmentCost: {material: 3, population: 4},
            developmentCostString: [
                ".",
                "[Saint Stephen I] and [Conversion to Christianity] must both be in your history."
            ],
            victoryPoints: 8,
            relatedCards: [
                CardName.SAINT_STEPHEN_I,
                CardName.CONVERSION_TO_CHRISTIANITY_MAG
            ]
        });
    }
}
