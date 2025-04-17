import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {effectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_CAR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR9",
            effectText: effectReuseMultipleSentences.prosperity
        });
    }
}
