import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class CelticInnovation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTIC_INNOVATION,
            suit: [],
            headerIcon: CardHeaderIcon.ATTACK,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL3",
            effectText: "You MAY acquire {uncivilised}/{civilised}.\n" +
                "Each other player takes {unrest}.",
            developmentCost: "{material}x2 {population}x2",
            victoryPoints: 4,
        });
    }
}
