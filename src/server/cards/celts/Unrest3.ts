import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Unrest3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_CEL_SUPPLY3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL24",
            effectText: [
                CardEffectReuse.setupUnrestL + "Celts" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            playerCount: 3,
            victoryPoints: -2,
        });
    }
}
