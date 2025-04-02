import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Caravans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARAVANS,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR10",
            effectText: "Exhaust: pay 3{material} and discard a card\n" +
                "to acquire a card in the market that\n" +
                "has {material} on it.",
        });
    }
}
