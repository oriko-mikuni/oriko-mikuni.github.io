import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Gambling extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GAMBLING,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1UNC18",
            effectText: [
                "Free play. Pay 1{material} and declare one of the following: {uncivilised}, {civilised}, {region}, or {tributary}.",
                "Reveal the top card of the main deck.",
                "If it matches the declared type, add it to your hand. Otherwise, exile it."
            ],
            victoryPoints: 1,
        });
    }
}
