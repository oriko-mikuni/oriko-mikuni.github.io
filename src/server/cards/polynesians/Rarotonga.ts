import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";

export class Rarotonga extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RAROTONGA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.VOYAGING],
            typeIcon: [CardTypeIcon.FERTILE, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL7",
            effectText: [
                CardEffectReuse.marketExile,
                "Solstice: gain 1{population}."
            ],
            developmentCostString: [
                "Development cost: Discard 2 mana"
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
