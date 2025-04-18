import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class StandingArmy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.STANDING_ARMY,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC1",
            effectText: [
                "Passive: when another player plays an {attack}, ignore the effects unless they give you 1{progress}."
            ],
            playerCount: 4,
            victoryPoints: 1,
        });
    }
}
