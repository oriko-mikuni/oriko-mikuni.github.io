import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {GameModule} from "../../../../common/cards/GameModule";

export class AtlanteanFleet extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEAN_FLEET_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL20X",
            effectText: [
                "Free play. Choose: sink a card from your discard pile to steal 1{progress} from each other player " +
                "OR break through for " + CardEffectReuse.fourSuits + "/{trade-route} and sink this card."
            ],
            gameModule: GameModule.ATLANTEANS
        });
    }
}
