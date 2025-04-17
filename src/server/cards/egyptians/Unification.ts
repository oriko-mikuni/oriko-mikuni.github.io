import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Unification extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNIFICATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY2",
            effectText: [
                "Gain 2{progress}.",
                cardEffectReuse.selfHistory
            ],
        });
    }
}
