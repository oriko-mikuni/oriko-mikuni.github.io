import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GwaithCamlan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GWAITH_CAMLAN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ART8",
            effectText: "PUT INTO PLAY WHEN GAINED.\n" +
                "Cannot be abandoned or recalled.\n" +
                "Solstice: put a {knight} into your history\n" +
                "(garrisoned or from your hand)\n" +
                "or take 2 {unrest}.",
            victoryPoints: 2,
        });
    }
}
