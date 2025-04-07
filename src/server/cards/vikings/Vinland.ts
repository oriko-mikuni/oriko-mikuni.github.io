import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Location} from "../../Player";

export class Vinland extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VINLAND,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER, CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "VIK7",
            effectText: "Cannot be played unless both [Longships]\n" +
                "and [Graenland] are in play.\n" +
                "Choose: return an {unrest} OR you MAY\n" +
                "garrison a card.",
            victoryPoints: 'conditional',
            victoryPointsString: "6VP if in play"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.IN_PLAY ? 6 : 0;
    }
}
