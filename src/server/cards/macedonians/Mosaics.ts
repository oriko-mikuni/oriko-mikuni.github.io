import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Mosaics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOSAICS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAC7",
            effectText: "Exhaust: pay 1{material} to draw a card from\n" +
                "your discard pile.",
            developmentCost: "{material}x4 {population}x1",
            victoryPoints: 3,
        });
    }
}
