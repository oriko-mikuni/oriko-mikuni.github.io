import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {isInPlayLocation, LocatedCard, Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class MayansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAYANS_POWER_B,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MAY1B",
            effectText: [
                "Solstice: if you have at least 1 {city} in play, choose: discard a {mask} OR abandon a {city}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {city}/{metropolis} in play",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const inPlayCards: Array<LocatedCard> =
            param.player.selectCards(card => isInPlayLocation(card.location));
        return (Player.countType(CardTypeIcon.CITY, inPlayCards)
            + Player.countType(CardTypeIcon.METROPOLIS, inPlayCards)
        ) * 2;
    }
}
