import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {RomansPowerA} from "./RomansPowerA";
import {RomansPowerB} from "./RomansPowerB";
import {JuliusCaesar} from "./JuliusCaesar";
import {MilitaryEngineering} from "./MilitaryEngineering";
import {RomanInvasion} from "./RomanInvasion";
import {Legions} from "./Legions";
import {TheSenate} from "./TheSenate";
import {RomeTheEternalCity} from "./RomeTheEternalCity";
import {EmperorTrajan} from "./EmperorTrajan";
import {Prosperity} from "./Prosperity";
import {BreadAndCircuses} from "./BreadAndCircuses";
import {GalliaAquitania} from "./GalliaAquitania";
import {Raetia} from "./Raetia";
import {Unrest} from "./Unrest";
import {Glory} from "./Glory";
import {Prosperity1} from "./Prosperity1";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Triumvirate} from "./Triumvirate";
import {CityOfRome} from "./CityOfRome";
import {Dalmatia} from "./Dalmatia";
import {RomanExpansion} from "./RomanExpansion";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {GameModule} from "../../../common/cards/GameModule";

export const ROM_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.ROMANS,
    nationCards: {
        [CardName.ROMANS_POWER_A]: {Factory: RomansPowerA},
        [CardName.ROMANS_POWER_B]: {Factory: RomansPowerB},
        [CardName.JULIUS_CAESAR]: {Factory: JuliusCaesar},
        [CardName.MILITARY_ENGINEERING]: {Factory: MilitaryEngineering},
        [CardName.ROMAN_INVASION]: {Factory: RomanInvasion},
        [CardName.LEGIONS]: {Factory: Legions},
        [CardName.THE_SENATE]: {Factory: TheSenate},
        [CardName.ROME_THE_ETERNAL_CITY]: {Factory: RomeTheEternalCity},
        [CardName.EMPEROR_TRAJAN]: {Factory: EmperorTrajan},
        [CardName.PROSPERITY_ROM]: {Factory: Prosperity},
        [CardName.BREAD_AND_CIRCUSES]: {Factory: BreadAndCircuses},
        [CardName.GALLIA_AQUITANIA]: {Factory: GalliaAquitania},
        [CardName.RAETIA]: {Factory: Raetia},
        [CardName.UNREST_ROM_NATION]: {Factory: Unrest},
        [CardName.GLORY_ROM]: {Factory: Glory},
        [CardName.PROSPERITY_ROM1]: {Factory: Prosperity1},
        [CardName.ADVANCE_ROM]: {Factory: Advance},
        [CardName.CONQUER_ROM]: {Factory: Conquer},
        [CardName.TRIUMVIRATE]: {Factory: Triumvirate},
        [CardName.CITY_OF_ROME]: {Factory: CityOfRome},
        [CardName.DALMATIA]: {Factory: Dalmatia},
        [CardName.ROMAN_EXPANSION]: {Factory: RomanExpansion},
        [CardName.UNREST_ROM]: {Factory: Unrest1},
        [CardName.UNREST_ROM1]: {Factory: Unrest2},
    },
});
