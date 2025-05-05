import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class SpreadingChaos extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SPREADING_CHAOS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL9",
            effectText: [
                "Free play. Each other player MAY draw a card.",
                "Passive: when another player takes a {unrest} (including via acquiring), you MAY recall this card to choose: gain 1{progress} OR gain 1{population} OR force that player to take a [Chaos] instead (return the {unrest})."
            ],
        });
    }
}
