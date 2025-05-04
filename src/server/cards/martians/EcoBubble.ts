import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class EcoBubble extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ECO_BUBBLE,
            suit: [CardSuitIcon.GADGET, CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT9",
            effectText: [
                "Gain 1{progress}.",
                "You MAY add 1{goods} to a card in the market.",
                "You MAY exile a card from the market.",
                "You MAY garrison up to 2 cards here."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-1VP unless in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 0 : -1
    }
}
