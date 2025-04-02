import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class JuliusCaesar extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JULIUS_CAESAR,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM2",
            effectText: "Free play. Choose: draw 2 cards,\n" +
                "OR you MAY acquire {region}/{tributary}.\n" +
                cardEffectReuse.SELF_HISTORY,
        });
    }
}
