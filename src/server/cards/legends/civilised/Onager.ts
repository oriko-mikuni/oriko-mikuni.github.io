import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Onager extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ONAGER_L,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2CIV5",
            effectText: [
                "Each other player abandons a {city}.",
                "Gain 2{material} per abandoned {city}.",
                "You MAY acquire {region}/{tributary}."
            ],
            victoryPoints: 2,
        });
    }
}
