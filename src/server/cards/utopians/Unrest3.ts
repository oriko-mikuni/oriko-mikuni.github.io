import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_UTO_SUPPLY3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.UTO,
            cardNumber: "UTO20",
            effectText: cardEffectReuse.setupUnrestL +
                "Utopians" + cardEffectReuse.setupUnrestR +
                cardEffectReuse.unrest,
            playerCount: 3,
            victoryPoints: -2,
        });
    }
}
