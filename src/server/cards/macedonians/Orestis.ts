import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Orestis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ORESTIS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC19",
            effectText: "Gain 2{material}. You MAY garrison a card.",
        });
    }
}
