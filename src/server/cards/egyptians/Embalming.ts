import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Embalming extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMBALMING,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "EGY4",
            effectText: "Passive: anytime you pay {population}, you\n" +
                "MAY put a card from your hand into\n" +
                "your history.\n" +
                "Exhaust: draw a card.",
            developmentCost: {material: 4},
            victoryPoints: 2,
        });
    }
}
