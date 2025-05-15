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

export class Bishoprics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BISHOPRICS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAG4",
            effectText: [
                "Take a {unrest}.",
                "Exhaust: break through for a {uncivilised}/{civilised}.",
                "Solstice: if [Conversion to Christianity] is in your history, you MAY return a {unrest} from your hand, and you MAY return a {unrest} from your discard pile."
            ],
            developmentCost: {material: 5},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {civilised}",
            relatedCards: [
                CardName.CONVERSION_TO_CHRISTIANITY_MAG
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards());
    }
}
