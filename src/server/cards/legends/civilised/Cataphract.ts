import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Cataphract extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CATAPHRACT_L,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.KNIGHT],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2CIV15",
            effectText: [
                "Each other player abandons a {region}.",
                "You MAY acquire {region}/{tributary}.",
                CardEffectReuse.knightGarrison
            ],
            victoryPoints: 2,
        });
    }
}
