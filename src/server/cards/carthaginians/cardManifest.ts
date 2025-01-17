import { CardName } from "../../../common/cards/CardName";
import { ModuleManifest } from "../ModuleManifest";
import { CityOfCarthage } from "./CityOfCarthage";
import { CarthaginianPowerA } from "./powerA";
import { CarthaginianPowerB } from "./powerB";



export const CAR_CARD_MANIFEST = new ModuleManifest({
    module: 'Carthaginians',
    nationCards: {
        [CardName.CARTHAGINIANS_POWER_A]: {Factory: CarthaginianPowerA},
        [CardName.CARTHAGINIANS_POWER_B]: {Factory: CarthaginianPowerB},
        [CardName.CITY_OF_CARTHAGE]: {Factory: CityOfCarthage},
        [CardName.ELEPHANTS]
        [CardName.ELEPHANTS1]
        [CardName.HEGEMONY]
        [CardName.HANNIBAL]
        [CardName.TRADING_SHIPS]
        [CardName.MONOPOLY]
        [CardName.PROSPERITY_CAR]
        [CardName.CARAVANS]
        [CardName.ADVANCE_CAR]
        [CardName.IBERIA]
        [CardName.BERBERS]
        [CardName.GLORY_CAR]
        [CardName.PROSPERITY_CAR_1]
        [CardName.ADVANCE_CAR_1]
        [CardName.CONQUER_CAR]
        [CardName.DIDO_QUEEN_OF_CARTHAGE]
        [CardName.CARTHAGINIAN_TRADERS]
        [CardName.BALEARIC_ISLANDS]
        [CardName.MAURETANIA]
        [CardName.UNREST_CAR]
        [CardName.UNREST_CAR1]
    }
});