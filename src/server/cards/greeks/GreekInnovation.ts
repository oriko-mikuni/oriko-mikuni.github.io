import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class GreekInnovation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEK_INNOVATION,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE7",
            effectText: [
                "Place 2 cards on top of your deck to acquire " + cardEffectReuse.fourSuits + ".",
                "Each other player recalls a {pinned}."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
        });
    }
}
