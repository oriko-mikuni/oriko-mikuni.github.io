import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {SassanidsPowerA} from "./SassanidsPowerA";
import {SassanidsPowerB} from "./SassanidsPowerB";
import {KhosrauI} from "./KhosrauI";
import {Shah} from "./Shah";
import {KushanEmpire} from "./KushanEmpire";
import {AcademyOfGondishapur} from "./AcademyOfGondishapur";
import {Bozorgan} from "./Bozorgan";
import {Dreaded} from "./Dreaded";
import {Sogdia} from "./Sogdia";
import {CityOfTaysafun} from "./CityOfTaysafun";
import {AswaranCavalry} from "./AswaranCavalry";
import {Atar} from "./Atar";
import {Clibanarii} from "./Clibanarii";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {ParthianEmpire} from "./ParthianEmpire";
import {Fars} from "./Fars";
import {Huzistan} from "./Huzistan";
import {Prosperity} from "./Prosperity";
import {Unrest2} from "./Unrest2";
import {Advance} from "./Advance";
import {WesternSilkRoad} from "./WesternSilkRoad";
import {Zoroastrianism} from "./Zoroastrianism";
import {Aban} from "./Aban";
import {ArdashirI} from "./ArdashirI";

export const SAS_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.SASSANIDS,
    nationCards: {
        [CardName.SASSANIDS_POWER_A]: {Factory: SassanidsPowerA},
        [CardName.SASSANIDS_POWER_B]: {Factory: SassanidsPowerB},
        [CardName.KHOSRAU_I]: {Factory: KhosrauI},
        [CardName.SHAH]: {Factory: Shah},
        [CardName.KUSHAN_EMPIRE]: {Factory: KushanEmpire},
        [CardName.ACADEMY_OF_GONDISHAPUR]: {Factory: AcademyOfGondishapur},
        [CardName.BOZORGAN]: {Factory: Bozorgan},
        [CardName.DREADED]: {Factory: Dreaded},
        [CardName.SOGDIA]: {Factory: Sogdia},
        [CardName.CITY_OF_TAYSAFUN]: {Factory: CityOfTaysafun},
        [CardName.ASWARAN_CAVALRY]: {Factory: AswaranCavalry},
        [CardName.ATAR]: {Factory: Atar},
        [CardName.CLIBANARII]: {Factory: Clibanarii},
        [CardName.UNREST_SAS_NATION]: {Factory: Unrest},
        [CardName.UNREST_SAS_NATION1]: {Factory: Unrest1},
        [CardName.PARTHIAN_EMPIRE]: {Factory: ParthianEmpire},
        [CardName.FARS]: {Factory: Fars},
        [CardName.HUZISTAN]: {Factory: Huzistan},
        [CardName.PROSPERITY_SAS]: {Factory: Prosperity},
        [CardName.UNREST_SAS]: {Factory: Unrest2},
        [CardName.ADVANCE_SAS]: {Factory: Advance},
        [CardName.WESTERN_SILK_ROAD_SAS]: {Factory: WesternSilkRoad},
        [CardName.ZOROASTRIANISM]: {Factory: Zoroastrianism},
        [CardName.ABAN]: {Factory: Aban},
        [CardName.ARDASHIR_I]: {Factory: ArdashirI},
    },
});
