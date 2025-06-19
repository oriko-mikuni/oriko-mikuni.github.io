import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class Nafanua extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NAFANUA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL13",
            effectText: [
                "Cannot be played unless [Overpopulation] is in play.",
                "You MAY gain 1 mana. Develop.",
                "Put this card into legends."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in legends",
            relatedCards: [
                CardName.OVERPOPULATION
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? 1 : 0;
    }
}
