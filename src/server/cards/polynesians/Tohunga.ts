import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Tohunga extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TOHUNGA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL12",
            effectText: [
                "Choose: pay 2{population} to break through for a {uncivilised} OR gain 1 mana to return a {unrest} and you MAY abandon [Overpopulation]."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.LEGENDS ? -2 : 0
    }
}
