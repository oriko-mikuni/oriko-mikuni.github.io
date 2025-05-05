import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class Alien extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALIEN,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "MRT29A",
            effectText: [
                "Passive: for each {progress} you pay, take a {unrest}.",
                "You cannot pay {progress} for [Unrest] costs.",
                "Score 1VP for every 3{progress} at game end instead of 1 each.",
                "End of Solstice: if you have no {progress}, exile your Nation deck and [Reactor Explosion], the flip this card."
            ],
            keywords: [
                KeywordNames.alienProgress
            ]
        });
    }
}
