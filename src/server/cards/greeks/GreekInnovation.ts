import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class GreekInnovation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEK_INNOVATION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE7",
            effectText: [
                "Place 2 cards on top of your deck to acquire " + CardEffectReuse.fourSuits + ".",
                "Each other player recalls a {pinned}."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
        });
    }
}
