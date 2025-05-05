import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class CultistsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CULTISTS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CUL1A",
            effectText: [
                "Passive: when you reshuffle your discard pile into a new draw deck, all other players MAY discard a {unrest}. Then each other player with no {unrest} in their discard pile takes a [Chaos] and places it in their discard pile."
            ],
            exhaustCount: 3
        });
    }
}
