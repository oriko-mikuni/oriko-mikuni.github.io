import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class Haka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HAKA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL11",
            effectText: [
                "If {isle-bound}, put a {river}/{fertile}/{hunt} you have in play into legends to acquire a {tributary} and gain it as mana.",
                "If {voyaging}, draw 2 cards from your discard pile."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? -2 : 0
    }
}
