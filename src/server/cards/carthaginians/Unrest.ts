import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_CAR,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR22",
            effectText: CardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
