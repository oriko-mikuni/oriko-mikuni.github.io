import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";

export class MythsAndLegends extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MYTHS_AND_LEGENDS_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL7X",
            effectText: [
                "Choose 2 {region} you have in play: sink 1 and abandon the other to look at the top 2 cards of the {fame} deck.",
                CardEffectReuse.takeOne
            ],
            developmentCost: {progress: 2},
            victoryPoints: 2,
            gameModule: GameModule.ATLANTEANS
        });
    }
}
