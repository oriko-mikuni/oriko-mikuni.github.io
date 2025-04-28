import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {MagyarsPowerA} from "./MagyarsPowerA";
import {MagyarsPowerB} from "./MagyarsPowerB";
import {ConversionToChristianity} from "./ConversionToChristianity";
import {SaintStephenI} from "./SaintStephenI";
import {Bishoprics} from "./Bishoprics";
import {HolyRight} from "./HolyRight";
import {Plundering} from "./Plundering";
import {Pannonia} from "./Pannonia";
import {GreatHungarianPlain} from "./GreatHungarianPlain";
import {Arpad} from "./Arpad";
import {Advance} from "./Advance";
import {GreatMoravia} from "./GreatMoravia";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {BloodOath} from "./BloodOath";
import {MountedArchers} from "./MountedArchers";
import {Etelkoz} from "./Etelkoz";
import {Levedia} from "./Levedia";
import {Conquer} from "./Conquer";
import {Glory} from "./Glory";
import {HuntersAndNomads} from "./HuntersAndNomads";
import {Emese} from "./Emese";
import {Almos} from "./Almos";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Unrest4} from "./Unrest4";
import {Unrest5} from "./Unrest5";
import {Unrest6} from "./Unrest6";

export const MAG_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.MAGYARS,
    nationCards: {
        [CardName.MAGYARS_POWER_A]: {Factory: MagyarsPowerA},
        [CardName.MAGYARS_POWER_B]: {Factory: MagyarsPowerB},
        [CardName.CONVERSION_TO_CHRISTIANITY_MAG]: {Factory: ConversionToChristianity},
        [CardName.SAINT_STEPHEN_I]: {Factory: SaintStephenI},
        [CardName.BISHOPRICS]: {Factory: Bishoprics},
        [CardName.HOLY_RIGHT]: {Factory: HolyRight},
        [CardName.PLUNDERING]: {Factory: Plundering},
        [CardName.PANNONIA]: {Factory: Pannonia},
        [CardName.GREAT_HUNGARIAN_PLAIN]: {Factory: GreatHungarianPlain},
        [CardName.ARPAD]: {Factory: Arpad},
        [CardName.ADVANCE_MAG]: {Factory: Advance},
        [CardName.GREAT_MORAVIA]: {Factory: GreatMoravia},
        [CardName.UNREST_MAG_NATION]: {Factory: Unrest},
        [CardName.UNREST_MAG_NATION1]: {Factory: Unrest1},
        [CardName.BLOOD_OATH]: {Factory: BloodOath},
        [CardName.MOUNTED_ARCHERS_MAG]: {Factory: MountedArchers},
        [CardName.ETELKOZ]: {Factory: Etelkoz},
        [CardName.LEVEDIA]: {Factory: Levedia},
        [CardName.CONQUER_MAG]: {Factory: Conquer},
        [CardName.GLORY_MAG]: {Factory: Glory},
        [CardName.HUNTERS_AND_NOMADS]: {Factory: HuntersAndNomads},
        [CardName.EMESE]: {Factory: Emese},
        [CardName.ALMOS]: {Factory: Almos},
        [CardName.UNREST_MAG]: {Factory: Unrest2},
        [CardName.UNREST_MAG_SUPPLY]: {Factory: Unrest3},
        [CardName.UNREST_MAG_SUPPLY_1]: {Factory: Unrest4},
        [CardName.UNREST_MAG_SUPPLY3]: {Factory: Unrest5},
        [CardName.UNREST_MAG_SUPPLY4]: {Factory: Unrest6},
    },
});
