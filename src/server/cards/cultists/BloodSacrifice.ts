import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class BloodSacrifice extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BLOOD_SACRIFICE,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN, CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL6",
            effectText: [
                "You MAY pay 1{population} to add 1{progress}/{population} to your ceremony card.",
                "You MAY pay 1{population} and return a {unrest} from your hand or discard pile to gain 1 {exhaust}."
            ],
        });
    }
}
