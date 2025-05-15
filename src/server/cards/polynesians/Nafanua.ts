import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

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
        return param.location === PlayerCardLocation.LEGENDS ? 1 : 0;
    }
}
