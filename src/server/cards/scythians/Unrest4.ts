import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest4 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_SCY2,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY24",
            effectText: cardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
