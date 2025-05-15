import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Kayaks extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KAYAKS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU15",
            effectText: [
                "Exhaust: if {barbarian}, move 1 of your {population} to here to acquire a {region} (including from exiled cards).",
                "If {empire}, when you gain {material} from a {ocean} in play, exhaust and recall this card to gain 2{progress}."
            ],
            developmentCost: {material: 3},
            developmentCostString: [
                ", OR free if [Imaq (Arctic Sea)] is in play"
            ],
            relatedCards: [
                CardName.IMAQ_ARCTIC_SEA
            ]
        });
    }
}
