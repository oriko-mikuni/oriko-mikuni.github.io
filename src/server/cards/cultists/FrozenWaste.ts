import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";

export class FrozenWaste extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FROZEN_WASTE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL15",
            effectText: [
                CardEffectReuse.thisCannotGarrison,
                CardEffectReuse.garrisonACard,
                "Solstice: choose: abandon a {pinned} OR exile a card (not a {unrest}) garrisoned here to break through for an exiled " + CardEffectReuse.fourSuits + "."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION, param.player.selectCards());
    }
}
