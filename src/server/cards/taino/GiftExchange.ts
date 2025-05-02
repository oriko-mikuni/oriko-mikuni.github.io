import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GiftExchange extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GIFT_EXCHANGE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI6",
            effectText: [
                "Exhaust: choose: free play a {empire} and each other player MAY draw a card OR gain 1{goods}."
            ],
            developmentCost: {material: 3, population: 1},
            victoryPoints: 2,
        });
    }
}
