import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class QulliqOilLamp extends Card implements ICard {
    constructor() {
        super({
            name: CardName.QULLIQ_OIL_LAMP,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU18",
            effectText: [
                "Exhaust: if {barbarian}, draw 2 cards. If {empire}, discard 2 cards to gain 1{progress}."
            ],
            developmentCost: {material: 4},
            victoryPoints: 1,
        });
    }
}
