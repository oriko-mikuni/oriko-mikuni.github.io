import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class OlmecsPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLMECS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "OLM1B",
            effectText: [
                "Exhaust: put a {mask} into your history to gain 2{progress}."
            ],
        });
    }
}
