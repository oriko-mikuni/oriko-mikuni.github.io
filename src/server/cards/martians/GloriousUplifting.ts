import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class GloriousUplifting extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORIOUS_UPLIFTING,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT20",
            effectText: [
                "Move 5{population} to your power card and put 2 {pinned} (not {region}) you have in play into your history to take the top {fame} card.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
