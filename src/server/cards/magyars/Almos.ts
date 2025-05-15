import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Almos extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALMOS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG22",
            effectText: [
                "Cannot be played unless [Emese] is in your history.",
                "Put a {region} from your hand into your history to acquire a " + CardEffectReuse.fourSuits + ".",
                "Each other player recalls a {pinned}.",
                CardEffectReuse.selfHistory
            ],
            relatedCards: [
                CardName.EMESE
            ]
        });
    }
}
