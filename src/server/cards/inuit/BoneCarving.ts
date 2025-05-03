import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class BoneCarving extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BONE_CARVING,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU21",
            effectText: [
                "Choose: garrison a card from your hand or discard pile in [Oral History] to break through for the top card of the main deck OR draw a card garrisoned in [Oral History] and gain 1{progress}."
            ],
            developmentCost: {material: 3},
            victoryPoints: 3,
        });
    }
}
