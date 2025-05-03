import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class KingKInichJanaabPakal extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_K_INICH_JANAAB_PAKAL,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY2",
            effectText: [
                "Free play if [Palenque] is in play.",
                "Acquire a " + CardEffectReuse.fourSuits + "/{trade-route} up to 2 times.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
