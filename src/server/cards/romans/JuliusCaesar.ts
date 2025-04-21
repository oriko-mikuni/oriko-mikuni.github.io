import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class JuliusCaesar extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JULIUS_CAESAR,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM2",
            effectText: [
                "Free play. Choose: draw 2 cards, OR you MAY acquire {region}/{tributary}.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
