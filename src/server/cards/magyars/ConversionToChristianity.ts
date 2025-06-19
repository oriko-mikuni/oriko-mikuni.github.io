import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class ConversionToChristianity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONVERSION_TO_CHRISTIANITY_MAG,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG2",
            effectText: [
                "Free play. Choose up to 3 times: return a {unrest} OR take a {unrest} to gain 1 action.",
                CardEffectReuse.selfHistory
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
