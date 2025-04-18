import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { Card } from "../Card";
import { ICard } from "../ICard";
import { CardInPlayType } from "../../../common/cards/CardInPlayType";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CityOfCarthage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_CARTHAGE,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR2",
            effectText: [
                CardEffectReuse.city
            ],
        });
    }
}
