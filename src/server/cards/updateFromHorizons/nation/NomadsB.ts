import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class NomadsB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOMADS_B_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY15X",
            effectText: [
                "You MAY draw a card.",
                "Gain 1{material} per {production}/{river}/{fertile} you have in play.",
                "If the other copy of [Nomads] is in your discard pile, gain 1{progress}."
            ],
            gameModule: GameModule.SCYTHIANS,
            relatedCards: [
                CardName.NOMADS_NEW
            ]
        });
    }
}
