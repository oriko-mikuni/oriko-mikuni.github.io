import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class OghamScript extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OGHAM_SCRIPT,
            suit: [],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL6",
            effectText: [
                CardEffectReuse.increaseHandSize1,
                "Exhaust: you MAY put a card from your hand into your history. You MAY put a card from your discard pile into your history."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 4,
        });
    }
}
