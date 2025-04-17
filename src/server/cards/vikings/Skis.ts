import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Skis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SKIS,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "VIK11",
            effectText: [
                "Exhaust: when you play a {region}, exhaust this card to choose: draw a card OR gain 2{material}."
            ],
            victoryPoints: 2
        });
    }
}
