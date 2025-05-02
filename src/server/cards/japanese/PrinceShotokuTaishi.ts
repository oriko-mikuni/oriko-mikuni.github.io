import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class PrinceShotokuTaishi extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PRINCE_SHOTOKU_TAISHI,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN22",
            effectText: [
                "Choose: return a {unrest} and find [Tendai Buddhism] and add it to your hand OR free play a {civilised} (ignoring {empire}) and find [Kanji] and add it to your hand.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
