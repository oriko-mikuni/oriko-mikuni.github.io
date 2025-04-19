import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Onager extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ONAGER_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1CIV5",
            effectText: [
                "Each other player abandons a {city}.",
                "Gain 2{material} per abandoned {city}.",
                "You MAY acquire {region}/{tributary}."
            ],
            victoryPoints: 2,
        });
    }
}
