import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class StrangeSigns extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STRANGE_SIGNS,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED, CardStateIcon.SUMMONED],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL13",
            effectText: [
                "Garrison this card in a {region} to break through for an exiled " + CardEffectReuse.fourSuits + " and place it into your discard pile.",
                "You MAY take a {unrest}."
            ],
        });
    }
}
