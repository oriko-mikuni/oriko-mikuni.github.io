import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST_QIN_SUPPLY4,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.SUPPLY,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN25",
            effectText: [
                CardEffectReuse.setupUnrestL + "Qin" + CardEffectReuse.setupUnrestR,
                CardEffectReuse.unrest
            ],
            playerCount: 4,
            victoryPoints: -2,
        });
    }
}
