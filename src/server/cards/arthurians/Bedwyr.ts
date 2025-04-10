import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Bedwyr extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BEDWYR,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ART,
            cardNumber: "ART9",
            effectText: "You MAY return [Excalibur] from your discard pile to the top of your deck.\n" +
                cardEffectReuse.knightGarrison,
        });
    }
}
