import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Chariots extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHARIOTS,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL5",
            effectText: "Passive: you may acquire exiled {region}.\n" +
                "Your [Conquer] and {attack} cards lose\n" +
                "the {barbarian} icon.",
            developmentCost: {population: 3},
            victoryPoints: 4,
        });
    }
}
