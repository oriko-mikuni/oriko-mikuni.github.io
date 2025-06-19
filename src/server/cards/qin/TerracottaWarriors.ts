import {GetVPParameter, ICard} from "../ICard";
import {CardName, isCardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardLocation} from "../../../common/cards/CardLocation";

export class TerracottaWarriors extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TERRACOTTA_WARRIORS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN10",
            effectText: [
                CardEffectReuse.unplayable,
                CardEffectReuse.bumpUpTextBox
            ],
            developmentCost: {material: 7},
            victoryPoints: 'conditional',
            victoryPointsString: "7VP if garrisoned, 3VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return isCardName(param.location) ? 7 : param.location === CardLocation.HISTORY ? 3 : 0;
    }
}
