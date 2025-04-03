import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Alexander extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALEXANDER,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC2",
            effectText: "Draw a card.\n" +
                "You MAY break through for {region}/{tributary}.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
