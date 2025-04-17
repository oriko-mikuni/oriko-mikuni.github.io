import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CityOfPersepolis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_PERSEPOLIS,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.PER,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "PER2",
            effectText: [
                CardEffectReuse.city
            ],
        });
    }
}
