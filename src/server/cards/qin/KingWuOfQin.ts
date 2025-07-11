import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class KingWuOfQin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_WU_OF_QIN,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN8",
            effectText: [
                "Cannot be played unless [Mandate of Heaven] is in play and [Duke Zhuang of Qin] is in your history.",
                "Pay up to 3{progress}. For each {progress} paid, acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfHistory
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history",
            relatedCards: [
                CardName.MANDATE_OF_HEAVEN_QIN,
                CardName.DUKE_ZHUANG_OF_QIN
            ]
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 2 : 0;
    }
}
