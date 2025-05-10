import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AcademyOfGondishapur extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ACADEMY_OF_GONDISHAPUR,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS5",
            effectText: [
                CardEffectReuse.increaseHandSize1,
                "Your [Advance] cards lose the {barbarian} icon.",
            ],
            developmentCost: {material: 5},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {city}/{metropolis}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.CITY, param.player.selectCards()) +
            Player.countType(CardTypeIcon.METROPOLIS, param.player.selectCards());
    }
}
