import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class OlmecsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLMECS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "OLM1A",
            effectText: [
                "Exhaust: choose: put a {mask} from your discard pile into your history OR discard 3 {mask} to acquire " + cardEffectReuse.fourSuits + "."
            ],
        });
    }
}
