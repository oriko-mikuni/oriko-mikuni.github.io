import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {Player} from "../../../Player";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class Cafall extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CAFALL_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ART,
            cardNumber: "ART25X",
            effectText: [
                "Free play. Draw 2 cards and place a card on the top of your deck.",
                "If [Twrch Trwyth] is in play or it is the active quest, you MAY exile it."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {hunt}",
            gameModule: GameModule.ARTHURIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.HUNT, param.player.selectCards());
    }
}
