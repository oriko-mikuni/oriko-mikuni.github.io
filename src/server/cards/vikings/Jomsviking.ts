import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class Jomsviking extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JOMSVIKING,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK22",
            effectText: [
                "Pay 1{population} and 2{material} to acquire {region}/{tributary}.",
                "Each other player discards a card."
            ],
        });
    }
}
