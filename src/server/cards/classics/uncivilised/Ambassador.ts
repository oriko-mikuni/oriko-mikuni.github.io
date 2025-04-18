import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Ambassador extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AMBASSADOR,
            suit: [CardSuitIcon.UNCIVILISED,CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC14",
            effectText: [
                "Exhaust: resolve the exhaust keyword on an opponent's {pinned} card as though it were your own."
            ],
            playerCount: 3,
            victoryPoints: 1,
        });
    }
}
