import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {Location} from "../../Player";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

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
                cardEffectReuse.unplayable,
                cardEffectReuse.bumpUpTextBox
            ],
            developmentCost: {material: 7},
            victoryPoints: 'conditional',
            victoryPointsString: "7VP if garrisoned, 3VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return !param.location.startsWith("location:") ? 7 :
            param.location === Location.HISTORY ? 3 : 0;
    }
}
