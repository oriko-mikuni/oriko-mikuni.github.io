import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class CelticGold extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTIC_GOLD,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL2",
            effectText: [
                "Each other player gains 1{material}.",
                "Gain 4{material} per {fertile} in your play area."
            ],
        });
    }
}
