import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class MyrddinWylltMerlin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MYRDDIN_WYLLT_MERLIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            nationColour: CardNationColour.ART,
            cardNumber: "ART23",
            effectText: [
                "Abandon 3 {knight} garrisoned in {region} to draw the active quest into your hand."
            ],
        });
    }
}
