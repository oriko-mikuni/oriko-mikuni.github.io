import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class LodestoneCompass extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LODESTONE_COMPASS_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM14X",
            effectText: [
                "Exhaust: discard 2 {mask} and spend 1 action to acquire a {region}/{tributary}/{trade-route}."
            ],
            gameModule: GameModule.OLMECS
        });
    }
}
