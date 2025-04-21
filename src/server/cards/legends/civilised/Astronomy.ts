import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Astronomy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ASTRONOMY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2CIV7",
            effectText: [
                "Exhaust: when you acquire {region}, exhaust this card to gain 1{progress}.",
                "Solstice: you MAY return a {region} from your discard pile to your hand."
            ],
            victoryPoints: 2,
        });
    }
}
