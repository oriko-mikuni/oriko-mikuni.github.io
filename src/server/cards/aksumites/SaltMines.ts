import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {PlayerCardLocation} from "../../Player";

export class SaltMines extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SALT_MINES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "AKS17",
            effectText: [
                "Passive: when you acquire a {region}, gain 1{population}.",
                "When you acquire a {uncivilised}, gain 1{material}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 1 : 0;
    }
}
