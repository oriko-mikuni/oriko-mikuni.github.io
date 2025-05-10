import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class ControllingTheTrade extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONTROLLING_THE_TRADE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG4",
            effectText: [
                "Free play. Recall a {region} to choose: gain 1 action OR trade.",
                "Exhaust: when you trade, exhaust this card to choose: gain 1{progress} OR put a card from your discard pile into your history."
            ],
            developmentCost: {population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {production}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION, param.player.selectCards()) / 3);
    }
}
