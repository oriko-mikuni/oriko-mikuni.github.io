import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Imports extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IMPORTS,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV18",
            effectText: [
                "All players gain 1{goods}.",
                "Choose: swap an exiled " + CardEffectReuse.fourSuits + " with a card in the market to trade OR pay 3{material} to break through for a {uncivilised}/{civilised}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 10 cards"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards().length / 10);
    }
}
