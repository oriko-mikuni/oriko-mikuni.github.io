import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Emese extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMESE,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG21",
            effectText: [
                "Choose: pay 1{material} to acquire a {uncivilised} OR draw a card from your discard pile and gain 2{population}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
