import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class JinguJiShrineTemple extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JINGU_JI_SHRINE_TEMPLE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.JPN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "JPN4",
            effectText: [
                "Exhaust: choose: move up to 2 of your {population} here OR pay 4{population} from here to draw the top {fame} card.",
                "Solstice: abandon this card unless both [Shinto] and [Tendai Buddhism] are in play."
            ],
            developmentCost: {material: 5},
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {fame}",
            relatedCards: [
                CardName.SHINTO,
                CardName.TENDAI_BUDDHISM
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards()) * 2;
    }
}
