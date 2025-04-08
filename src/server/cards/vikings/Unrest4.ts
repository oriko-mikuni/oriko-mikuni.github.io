import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest4 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_VIK2,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK26",
            effectText: CardEffectReuse.setupUnrestL+
                "Vikings" + CardEffectReuse.setupUnrestR+
                CardEffectReuse.unrest,
            playerCount: 4,
            victoryPoints: -2,
        });
    }
}
