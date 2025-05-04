import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_POL_SUPPLY,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.POL,
            cardNumber: "POL27",
            effectText: [
                CardEffectReuse.setupUnrestL + "Polynesians" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            playerCount: 3,
            victoryPoints: -2,
        });
    }
}
