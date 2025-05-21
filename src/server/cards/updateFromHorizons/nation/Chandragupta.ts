import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";
import {KeywordNames} from "../../../../common/keywords";

export class Chandragupta extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANDRAGUPTA_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU18X",
            effectText: [
                "Choose: acquire a {region}/{trade-route} and free play it OR find an [Indian Elephants] and place it on the top of your deck.",
                CardEffectReuse.selfHistory
            ],
            gameModule: GameModule.MAURYANS,
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.INDIAN_ELEPHANTS_NEW,
                CardName.INDIAN_ELEPHANTS_B_NEW
            ]
        });
    }
}
