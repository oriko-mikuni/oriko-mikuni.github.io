import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Vercingetorix extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VERCINGETORIX,
            suit: [],
            headerIcon: undefined,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardInPlayType: undefined,
            cardNumber: "CEL7",
            effectText: "You MAY acquire " + CardEffectReuse.fourSuits + ".\n" +
                CardEffectReuse.selfHistory,
            developmentCost: {material: 4},
            expansion: undefined,
            playerCount: undefined,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.suitCount(CardSuitIcon.UNCIVILISED);
    }
}
