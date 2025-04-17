import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class TreeOfKnowledge extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TREE_OF_KNOWLEDGE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "UTO8",
            effectText: [
                "Exhaust: garrison a {scroll} here to acquire {uncivilised}/{civilised}.",
                "Solstice: choose: discard a card OR abandon this card and draw a card."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {civilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards());
    }
}
