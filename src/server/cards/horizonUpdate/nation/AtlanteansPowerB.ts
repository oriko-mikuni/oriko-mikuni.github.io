import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class AtlanteansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEANS_POWER_B_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ATL1BX",
            effectText: [
                "Passive: when a card would be put into your history, discard it instead and abandon a {pinned} if able."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region} except {ocean}",
            gameModule: GameModule.ATLANTEANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION,
            param.player.selectCards(card =>
                card.card.typeIcon.every(type => type !== CardTypeIcon.OCEAN)
            )
        );
    }
}
