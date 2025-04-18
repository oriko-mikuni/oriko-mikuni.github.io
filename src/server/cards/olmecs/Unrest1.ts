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
            name: CardName.UNREST_OLM_SUPPLY3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM25",
            effectText: [
                CardEffectReuse.setupUnrestL + "Olmecs" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
            playerCount: 3
        });
    }
}
