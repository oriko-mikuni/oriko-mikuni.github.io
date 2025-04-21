import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class EdictsOfAshoka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EDICTS_OF_ASHOKA,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU7",
            effectText: [
                "Only playable if [Ashoka] is in your history.",
                "Exhaust: put a card from your hand into your history to choose: draw a card OR return an {unrest} from your discard pile OR both."
            ],
            developmentCost: {material: 4},
            victoryPoints: 3,
        });
    }
}
