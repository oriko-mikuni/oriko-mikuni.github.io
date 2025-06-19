import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardLocation} from "../../../common/cards/CardLocation";

export class Headpiece2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HEADPIECE2,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardNumber: "MAY10",
            effectText: [
                "Choose: gain 1{material} per {city}/{metropolis} you have in play OR draw up to 3 cards if able."
            ],
            developmentCost: {material: 2},
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 2 : 0
    }
}
