import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class CulturalDiversity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CULTURAL_DIVERSITY,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3UNC19",
            effectText: [
                "Free play. Discard a card (not a {unrest}) to ignore the {barbarian}/{empire} icons on every card you play for the rest of the turn."
            ],
            victoryPoints: 1,
        });
    }
}
