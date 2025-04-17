import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Location} from "../../Player";

export class LadyBertilak extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LADY_BERTILAK,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ART,
            cardNumber: "ART15",
            effectText: [
                "Free play. Abandon a {region} with a {knight} garrisoned. Draw 2 cards.",
                "Each other player discards 2 cards."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 2 : 0;
    }
}
