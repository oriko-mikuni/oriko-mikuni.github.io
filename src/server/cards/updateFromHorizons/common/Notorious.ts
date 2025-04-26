import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class Notorious extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOTORIOUS_NEW,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1FAM3X",
            effectText: [
                "Free play. You MAY draw a card.",
                "Steal 1{progress} from each other player.",
                "Anyone unable to pay takes {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {attack}",
            gameModule: GameModule.CLASSICS_COMMON
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            (card) => card.card.headerIcon === CardHeaderIcon.ATTACK
        ).length;
    }
}
