import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Bucellarii extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BUCELLARII,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.KNIGHT],
            cardNumber: "3CIV15",
            effectText: [
                "Choose: recall a {region} to break through for a {tributary} OR gain 1{population} per {region} you have in play.",
                CardEffectReuse.knightGarrison
            ],
            victoryPoints: 2,
        });
    }
}
