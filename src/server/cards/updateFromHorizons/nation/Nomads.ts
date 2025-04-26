import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {GameModule} from "../../../../common/cards/GameModule";

export class Nomads extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOMADS_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY14X",
            effectText: [
                "You MAY draw a card.",
                "Gain 1{material} per {production}/{river}/{fertile} you have in play.",
                "If the other copy of [Nomads] is in your discard pile, gain 1{progress}."
            ],
            gameModule: GameModule.SCYTHIANS
        });
    }
}
