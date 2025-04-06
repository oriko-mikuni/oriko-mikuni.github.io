import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class GreekMercenaries extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEK_MERCENARIES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE15",
            effectText: "Gain 1{progress}. Draw a card.\n" +
                "Steal 2{material} from each other player.\n" +
                "Each other player gains 1{population}.",
        });
    }
}
