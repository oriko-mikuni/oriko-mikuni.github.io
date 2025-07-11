import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class MauryansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAURYANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MAU1A",
            effectText: [
                "Exhaust: when you play a {region}, exhaust this card to gain 1{progress}.",
                "Solstice: you MAY pay 1{material} to return a {region} from your discard pile to your hand."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region} in play"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION,
            param.player.selectCards(card => isInPlayLocation(card.location))
        );
    }
}
