import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AbbasidRevolution extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ABBASID_REVOLUTION,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB18",
            effectText: [
                "Choose: take a {unrest} to break through for a {region} and free play it OR put a {region} you have in play into your history to return any number of {unrest}.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
