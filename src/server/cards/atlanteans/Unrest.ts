import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_ATL,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL19",
            effectText: cardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
