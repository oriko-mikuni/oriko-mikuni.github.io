import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Espionage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ESPIONAGE,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2UNC4",
            effectText: [
                "Place a card on the top of your draw deck to acquire " + CardEffectReuse.fourSuits + ".",
                "Each other player recalls a {pinned}."
            ],
            victoryPoints: 1,
        });
    }
}
