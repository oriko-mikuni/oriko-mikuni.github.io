import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_MAC2,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC23",
            effectText: cardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
