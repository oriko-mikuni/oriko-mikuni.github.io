import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {PersiansPowerA} from "./PersiansPowerA";
import {PersiansPowerB} from "./PersiansPowerB";
import {CityOfPersepolis} from "./CityOfPersepolis";
import {BatteringRam} from "./BatteringRam";
import {Development} from "./Development";
import {Windmills} from "./Windmills";
import {Satrap} from "./Satrap";
import {PersianGold} from "./PersianGold";
import {Babylonians} from "./Babylonians";
import {DariusI} from "./DariusI";
import {Arachosia} from "./Arachosia";
import {NisaeanPlain} from "./NisaeanPlain";
import {MedianEmpire} from "./MedianEmpire";
import {Unrest} from "./Unrest";
import {Glory} from "./Glory";
import {Prosperity} from "./Prosperity";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Conquer1} from "./Conquer1";
import {Bactria} from "./Bactria";
import {Zagros} from "./Zagros";
import {Lydians} from "./Lydians";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const PER_CARD_MANIFEST = new ModuleManifest({
    module: 'Persians',
    nationCards: {
        [CardName.PERSIANS_POWER_A] : {Factory: PersiansPowerA},
        [CardName.PERSIANS_POWER_B] : {Factory: PersiansPowerB},
        [CardName.CITY_OF_PERSEPOLIS] : {Factory: CityOfPersepolis},
        [CardName.BATTERING_RAM] : {Factory: BatteringRam},
        [CardName.DEVELOPMENT_PER] : {Factory: Development},
        [CardName.WINDMILLS] : {Factory: Windmills},
        [CardName.SATRAP] : {Factory: Satrap},
        [CardName.PERSIAN_GOLD] : {Factory: PersianGold},
        [CardName.BABYLONIANS] : {Factory: Babylonians},
        [CardName.DARIUS_I] : {Factory: DariusI},
        [CardName.ARACHOSIA] : {Factory: Arachosia},
        [CardName.NISAEAN_PLAIN] : {Factory: NisaeanPlain},
        [CardName.MEDIAN_EMPIRE] : {Factory: MedianEmpire},
        [CardName.UNREST_PER_NATION] : {Factory: Unrest},
        [CardName.GLORY_PER] : {Factory: Glory},
        [CardName.PROSPERITY_PER] : {Factory: Prosperity},
        [CardName.ADVANCE_PER] : {Factory: Advance},
        [CardName.CONQUER_PER] : {Factory: Conquer},
        [CardName.CONQUER_PER1] : {Factory: Conquer1},
        [CardName.BACTRIA] : {Factory: Bactria},
        [CardName.ZAGROS] : {Factory: Zagros},
        [CardName.LYDIANS] : {Factory: Lydians},
        [CardName.UNREST_PER] : {Factory: Unrest1},
        [CardName.UNREST_PER1] : {Factory: Unrest2},
    },
});
