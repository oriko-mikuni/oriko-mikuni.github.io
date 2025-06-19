import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

import {CardLocation} from "../../../common/cards/CardLocation";

export class Cryostasis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CRYOSTASIS,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT23",
            effectText: [
                "Gain 1{progress}. Exhaust: garrison a card here to gain 1{population}.",
                "Solstice: you MAY discard a card to draw a card (not a {gadget}) garrisoned here."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-1VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 0 : -1
    }
}
