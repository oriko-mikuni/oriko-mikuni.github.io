import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class InvasionC extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INVASION_C_NEW,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1UNC7X",
            effectText: [
                "Pay 3{material}. Each other player takes {unrest}.",
                "Choose: break through for {tributary} OR break through for {region} and each other player recalls a {region}.",
                "If {empire}, put this card into your history."
            ],
            victoryPoints: 1,
            gameModule: GameModule.CLASSICS_COMMON
        });
    }
}
