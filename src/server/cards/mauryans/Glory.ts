import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {EffectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_MAU,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU2",
            effectText: EffectReuseMultipleSentences.glory,
        });
    }
}
