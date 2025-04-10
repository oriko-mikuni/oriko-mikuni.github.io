import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CaiSirKay extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CAI_SIR_KAY,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            nationColour: CardNationColour.ART,
            cardNumber: "ART18",
            effectText: "You MAY return a {region} from your discard " +
                "pile to the top of your deck.\n" +
                cardEffectReuse.knightGarrison,
        });
    }
}
