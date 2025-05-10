import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class ParthianEmpire extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PARTHIAN_EMPIRE,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.KNIGHT],
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS15",
            effectText: [
                "You MAY acquire a {region}/{tributary}.",
                "Choose: garrison this card in a {region} to trigger that card's play effect OR put this card into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
