import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";
import {Location} from "../../Player";

export class KingWuOfQin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_WU_OF_QIN,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN8",
            effectText: "Cannot be played unless [Mandate of Heaven] is in play " +
                "and [Duke Zhuang of Qin] is\n" +
                "in your history.\n" +
                "Pay up to 3{progress}. For each {progress} paid,\n" +
                "acquire " + cardEffectReuse.fourSuits + ".\n" +
                cardEffectReuse.selfHistory,
            developmentCost: {material: 3, population: 2},
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 2 : 0;
    }
}
