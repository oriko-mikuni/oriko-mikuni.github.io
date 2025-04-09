import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Flood2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FLOOD2,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL14",
            effectText: "Sink this card and a {region} in play to\n" +
                "acquire " + cardEffectReuse.fourSuits + ".",
        });
    }
}
