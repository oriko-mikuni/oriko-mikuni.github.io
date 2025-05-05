import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Chaos3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHAOS_CUL_SUPPLY3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.CHAOS,
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL28",
            effectText: [
                "Pay 1{progress} to return this card to the chaos pile.",
                "IMPORTANT: If the chaos pile is empty when Collapse is triggered, the Cultist player AUTOMATICALLY WINS."
            ],
            playerCount: 3,
            victoryPoints: -3,
        });
    }
}
