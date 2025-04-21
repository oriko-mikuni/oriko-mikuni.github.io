import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class CelticInnovation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTIC_INNOVATION,
            suit: [],
            headerIcon: CardHeaderIcon.ATTACK,
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL3",
            effectText: [
                "You MAY acquire {uncivilised}/{civilised}.",
                "Each other player takes {unrest}."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 4,
        });
    }
}
