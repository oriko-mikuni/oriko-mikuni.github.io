import {Card} from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Acclaimed extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ACCLAIMED,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM8",
            effectText: [
                "Break through for a {variable} card.",
                CardEffectReuse.selfHistory,
                CardEffectReuse.bumpUpTextBox
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {variable} card (including this one)"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card.card.victoryPoints === 'variable'
        ).length;
    }
}
