import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Phalanx extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHALANX,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC17",
            effectText: [
                "Exhaust: play a {region} from your discard pile (spending an action as normal)."
            ],
        });
    }
}
