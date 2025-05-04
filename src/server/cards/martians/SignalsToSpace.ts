import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class SignalsToSpace extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SIGNALS_TO_SPACE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT19",
            effectText: [
                "Exhaust: abandon a {region} to return a {unrest} from your discard pile and you MAY convert 1{progress} into 1{population}."
            ],
        });
    }
}
