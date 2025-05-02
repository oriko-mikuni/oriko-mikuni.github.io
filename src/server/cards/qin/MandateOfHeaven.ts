import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation} from "../../Player";

export class MandateOfHeaven extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MANDATE_OF_HEAVEN_QIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN22",
            effectText: [
                "Exhaust: add 1{population} from the supply to a card in the market, then you MAY abandon this card.",
                "Solstice: discard 2 cards."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-2VP if not in play"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return isInPlayLocation(param.location) ? 0 : -2;
    }
}
