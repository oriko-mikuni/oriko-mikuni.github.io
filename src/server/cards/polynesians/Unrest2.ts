import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Unrest2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_POL_SUPPLY3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.POL,
            cardNumber: "POL28",
            effectText: [
                CardEffectReuse.setupUnrestL + "Polynesians" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
