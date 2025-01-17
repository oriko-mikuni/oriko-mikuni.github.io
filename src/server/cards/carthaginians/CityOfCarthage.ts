import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardTypeIcon } from "../../../common/cards/CardTypeIcon";
import { Player } from "../../Player";
import { PlayerInput } from "../../PlayerInput";
import { AbstractCity } from "../abstractCards/city";
import { Card } from "../Card"
import { ICard, ISolsticeCard } from "../ICard";

export class CityOfCarthage extends AbstractCity {
    constructor() {
        super(
            CardName.CITY_OF_CARTHAGE,
            [],
            CardStartingLocation.ACCESSION,
            CardNationColour.CAR
        );
    }
};