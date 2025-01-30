import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { AbstractCity } from "../abstractCards/AbstractCity";

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