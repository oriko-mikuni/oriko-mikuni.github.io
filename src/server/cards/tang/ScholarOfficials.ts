import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class ScholarOfficials extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCHOLAR_OFFICIALS,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN17",
            effectText: [
                "Draw a card. Choose: add 1 resource of your choice to a card in the market OR gain all resources from a card in the market."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
