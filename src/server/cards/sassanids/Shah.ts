import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Player} from "../../Player";
import {KeywordNames} from "../../../common/keywords";

export class Shah extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHAH,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS3",
            effectText: [
                "Free play. Choose: find a {fame} card and put it into your history to gain 1 action OR if the {fame} deck is empty, trigger [King of Kings] and put this card into history."
            ],
            developmentCost: {material: 3, population: 2},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fame}",
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.KOK_A,
                CardName.KOK_B
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards());
    }
}
