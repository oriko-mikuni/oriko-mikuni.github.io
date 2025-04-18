import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AtlanteanFleet extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEAN_FLEET,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL20",
            effectText: [
                "Free play. Choose: sink a card from your discard pile and steal 1{progress} from each player " +
                "OR break through for " + CardEffectReuse.fourSuits + " and sink this card."
            ],
        });
    }
}
