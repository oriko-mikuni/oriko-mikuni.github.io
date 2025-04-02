import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {CityOfCarthage} from "./CityOfCarthage";
import {CarthaginiansPowerA} from "./powerA";
import {CarthaginiansPowerB} from "./powerB";
import {CarthaginiansElephants0} from "./CarthaginiansElephants0";
import {CarthaginiansElephants1} from "./CarthaginiansElephants1";
import {Hegemony} from "./Hegemony";
import {Hannibal} from "./Hannibal";
import {TradingShips} from "./TradingShips";
import {Monopoly} from "./Monopoly";
import {Prosperity} from "./Prosperity";
import {Caravans} from "./Caravans";
import {Advance} from "./Advance";
import {Iberia} from "./Iberia";
import {Berbers} from "./Berbers";
import {Glory} from "./Glory";
import {Prosperity1} from "./Prosperity1";
import {Advance1} from "./Advance1";
import {Conquer} from "./Conquer";
import {DidoQueenOfCarthage} from "./DidoQueenOfCarthage";
import {CarthaginianTraders} from "./CarthaginianTraders";
import {BalearicIslands} from "./BalearicIslands";
import {Mauretania} from "./Mauretania";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";

export const CAR_CARD_MANIFEST = new ModuleManifest({
    module: 'Carthaginians',
    nationCards: {
        [CardName.CARTHAGINIANS_POWER_A]: {Factory: CarthaginiansPowerA},
        [CardName.CARTHAGINIANS_POWER_B]: {Factory: CarthaginiansPowerB},
        [CardName.CITY_OF_CARTHAGE]: {Factory: CityOfCarthage},
        [CardName.ELEPHANTS]: {Factory: CarthaginiansElephants0},
        [CardName.ELEPHANTS1]: {Factory: CarthaginiansElephants1},
        [CardName.HEGEMONY]: {Factory: Hegemony},
        [CardName.HANNIBAL]: {Factory: Hannibal},
        [CardName.TRADING_SHIPS]: {Factory: TradingShips},
        [CardName.MONOPOLY]: {Factory: Monopoly},
        [CardName.PROSPERITY_CAR]: {Factory: Prosperity},
        [CardName.CARAVANS]: {Factory: Caravans},
        [CardName.ADVANCE_CAR]: {Factory: Advance},
        [CardName.IBERIA]: {Factory: Iberia},
        [CardName.BERBERS]: {Factory: Berbers},
        [CardName.GLORY_CAR]: {Factory: Glory},
        [CardName.PROSPERITY_CAR_1]: {Factory: Prosperity1},
        [CardName.ADVANCE_CAR_1]: {Factory: Advance1},
        [CardName.CONQUER_CAR]: {Factory: Conquer},
        [CardName.DIDO_QUEEN_OF_CARTHAGE]: {Factory: DidoQueenOfCarthage},
        [CardName.CARTHAGINIAN_TRADERS]: {Factory: CarthaginianTraders},
        [CardName.BALEARIC_ISLANDS]: {Factory: BalearicIslands},
        [CardName.MAURETANIA]: {Factory: Mauretania},
        [CardName.UNREST_CAR]: {Factory: Unrest},
        [CardName.UNREST_CAR1]: {Factory: Unrest1},
    }
});
