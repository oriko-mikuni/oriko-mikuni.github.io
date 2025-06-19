import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Monastery extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MONASTERY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO4",
            effectText: [
                "Exhaust: garrison a {scroll} here to exile a card from your hand (not a {unrest}) and gain 2{population}. If it was an {attack}, also gain 1{progress}.",
                "Solstice: draw a card OR abandon this card and return an {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4 cards in exile"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.game.exileSize / 4);
    }
}
