import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class KingMinos extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_MINOS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN2",
            effectText: [
                "Gain 1{progress}. You MAY develop.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
