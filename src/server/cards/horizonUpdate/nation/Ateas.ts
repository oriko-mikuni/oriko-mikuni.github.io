import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {Player} from "../../../Player";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class Ateas extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATEAS_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY3X",
            effectText: [
                "You MAY acquire a {region}.",
                "You MAY acquire a {uncivilised}.",
                "You MAY acquire a {civilised}.",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {population: 4},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}",
            gameModule: GameModule.SCYTHIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
