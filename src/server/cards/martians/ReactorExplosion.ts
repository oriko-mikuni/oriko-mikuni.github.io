import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ReactorExplosion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.REACTOR_EXPLOSION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT2",
            effectText: [
                "PUT INTO PLAY WHEN GAINED.",
                "Cannot be abandoned or recalled.",
                "Do NOT flip your state card.",
                "Passive: your {development} cards lose the {barbarian} icon.",
                "Solstice: take 2 {unrest} and put 1 of them into your history."
            ],
        });
    }
}
