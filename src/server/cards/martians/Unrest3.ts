import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Unrest3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_MRT_SUPPLY1,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.MRT,
            cardNumber: "MRT28",
            effectText: [
                CardEffectReuse.setupUnrestL + "Martians" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
