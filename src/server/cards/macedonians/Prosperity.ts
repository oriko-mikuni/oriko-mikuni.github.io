import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_MAC,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC10",
            effectText: cardEffectReuse.prosperity,
        });
    }
}
