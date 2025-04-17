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
            name: CardName.UNREST_ART_SUPPLY4,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.ART,
            cardNumber: "ART29",
            effectText: [
                cardEffectReuse.setupUnrestL + "Arthurians" + cardEffectReuse.setupUnrestR,
                cardEffectReuse.unrest
            ],
            playerCount: 4,
            victoryPoints: -2,
        });
    }
}
