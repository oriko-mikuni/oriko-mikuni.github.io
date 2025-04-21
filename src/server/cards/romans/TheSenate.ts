import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TheSenate extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THE_SENATE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM6",
            effectText: [
                "You MAY acquire {civilised}.",
                "You MAY put a card from your hand into your history."
            ],
            developmentCost: {material: 4},
            victoryPoints: 3,
        });
    }
}
