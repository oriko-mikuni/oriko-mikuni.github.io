import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class KingEndubis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_ENDUBIS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.AKS,
            cardNumber: "AKS3",
            effectText: [
                "Gain 3{material}.",
                "Break through for a {region}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 2, population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {production}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION, param.player.selectCards()) / 2);
    }
}
