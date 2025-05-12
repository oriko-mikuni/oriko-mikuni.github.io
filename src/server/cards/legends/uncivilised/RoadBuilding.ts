import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class RoadBuilding extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROAD_BUILDING,
            suit: [CardSuitIcon.UNCIVILISED,CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC18",
            effectText: [
                "Passive: your [Conquer] cards lose the {barbarian} icon.",
                "Solstice: gain 2{material}."
            ],
            victoryPoints: 1,
        });
    }
}
