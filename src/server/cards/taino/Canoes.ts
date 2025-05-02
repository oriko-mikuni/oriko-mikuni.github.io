import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Canoes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CANOES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI19",
            effectText: [
                "Exhaust: place a card on the top of your deck and move 1 of your {population} here to acquire a {region}. If it has {ocean}, gain 1{progress}."
            ],
        });
    }
}
