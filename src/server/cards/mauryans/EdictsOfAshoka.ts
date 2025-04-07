import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class EdictsOfAshoka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EDICTS_OF_ASHOKA,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU7",
            effectText: "Only playable if [Ashoka] is in your history.\n" +
                "Exhaust: put a card from your hand into your history to choose: " +
                "draw a card OR return an {unrest} from your discard pile OR both.",
            developmentCost: {material: 4},
            victoryPoints: 3,
        });
    }
}
