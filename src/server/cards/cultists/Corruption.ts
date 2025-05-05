import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class Corruption extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CORRUPTION_CUL,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL12",
            effectText: [
                "All players gain 2{material}.",
                "Each other player takes a {unrest}.",
                "Gain 1{progress}."
            ],
        });
    }
}
