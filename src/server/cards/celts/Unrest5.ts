import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Unrest5 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_CEL_SUPPLY4,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL26",
            effectText: CardEffectReuse.SETUP_UNREST_L+
                "Celts" + CardEffectReuse.SETUP_UNREST_R+
                CardEffectReuse.UNREST,
            playerCount: 4,
            victoryPoints: -2,
        });
    }
}
