import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Migration extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MIGRATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI8",
            effectText: [
                "Abandon 6 {production} and move 1 of your {population} to a {pinned} you have in play to look at the top 2 cards of the {fame} deck.",
                CardEffectReuse.takeOne
            ],
        });
    }
}
