import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Chultuns extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHULTUNS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY26",
            effectText: [
                "Exhaust: discard a {mask} to choose: free play a {unrest} OR free play a {city} OR gain 1{population}."
            ],
        });
    }
}
