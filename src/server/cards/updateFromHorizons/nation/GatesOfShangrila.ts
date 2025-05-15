import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class GatesOfShangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GATES_OF_SHANGRILA_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO3AX",
            effectText: [
                "Flip your state card to its {empire} side.",
                "Exhaust: put a card from your hand into your history to move 3{material} here.",
                "Solstice: all other players MAY draw a card. Choose: draw a card and gain 2{material} OR move 1{material} here OR pay all {material} from here (minimum 12) to flip this card."
            ],
            gameModule: GameModule.UTOPIANS,
            relatedCards: [
                CardName.SHANGRILA_NEW
            ]
        });
    }
}
