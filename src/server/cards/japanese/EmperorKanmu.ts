import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class EmperorKanmu extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_KANMU,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.JPN,
            cardNumber: "JPN2",
            effectText: [
                "Free play. Break through for a {civilised}. You MAY abandon a {pinned} to draw 3 cards and put a card from your hand into your history.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
