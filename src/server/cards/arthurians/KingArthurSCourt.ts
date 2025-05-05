import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {KeywordNames} from "../../../common/keywords";

export class KingArthurSCourt extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_ARTHUR_S_COURT,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "ART2",
            effectText: [
                "Passive: a {development} card that is garrisoned here is considered the active quest.",
                "Exhaust: if [Camelot] is in play, discard a card to return an {unrest}.",
                "Solstice: if there is no active quest, you MAY take {unrest} to garrison an impending quest."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {civilised}",
            keywords: [
                KeywordNames.doNotScoreActiveQuest
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards());
    }
}
