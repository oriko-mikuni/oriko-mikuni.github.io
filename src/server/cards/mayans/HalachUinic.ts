import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class HalachUinic extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HALACH_UINIC,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY27",
            effectText: [
                "Gain 1 {exhaust} per {city}/{metropolis} you have in play.",
                "Look at the top card of your nation deck.",
                "You MAY place it at the bottom of your nation deck."
            ],
        });
    }
}
