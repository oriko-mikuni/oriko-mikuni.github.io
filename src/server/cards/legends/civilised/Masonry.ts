import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {Location, Player} from "../../../Player";

export class Masonry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MASONRY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2CIV9",
            effectText: [
                "Passive: you can free play {city} and {metropolis} cards."
            ],
            playerCount: 4,
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {city}/{metropolis} in your play area"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const inPlayCards =
            param.player.selectCards(card => card.location === Location.IN_PLAY);
        return (Player.countType(CardTypeIcon.CITY, inPlayCards)
            + Player.countType(CardTypeIcon.METROPOLIS, inPlayCards)
        ) * 2;
    }
}
