import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest3} from "./Unrest3";
import {QinPowerA} from "./QinPowerA";
import {QinPowerB} from "./QinPowerB";
import {LongWalls1} from "./LongWalls1";
import {LongWalls2} from "./LongWalls2";
import {LongWalls3} from "./LongWalls3";
import {LongWalls4} from "./LongWalls4";
import {EmperorQinShiHuang} from "./EmperorQinShiHuang";
import {Mathematics} from "./Mathematics";
import {KingWuOfQin} from "./KingWuOfQin";
import {Metallurgy} from "./Metallurgy";
import {TerracottaWarriors} from "./TerracottaWarriors";
import {EasternZhou} from "./EasternZhou";
import {Glory} from "./Glory";
import {WritingSystems} from "./WritingSystems";
import {Unrest} from "./Unrest";
import {ConfucianismQin} from "./ConfucianismQin";
import {Legalism} from "./Legalism";
import {SchollOfDiplomacy} from "./SchollOfDiplomacy";
import {WesternZhou} from "./WesternZhou";
import {Advance} from "./Advance";
import {Prosperity} from "./Prosperity";
import {DukeZhuangOfQin} from "./DukeZhuangOfQin";
import {MandateOfHeaven} from "./MandateOfHeaven";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {GameModule} from "../../../common/cards/GameModule";

export const QIN_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.QIN,
    nationCards: {
        [CardName.QIN_POWER_A]: {Factory: QinPowerA},
        [CardName.QIN_POWER_B]: {Factory: QinPowerB},
        [CardName.LONG_WALLS_I]: {Factory: LongWalls1},
        [CardName.LONG_WALLS_II]: {Factory: LongWalls2},
        [CardName.LONG_WALLS_III]: {Factory: LongWalls3},
        [CardName.LONG_WALLS_IV]: {Factory: LongWalls4},
        [CardName.EMPEROR_QIN_SHI_HUANG]: {Factory: EmperorQinShiHuang},
        [CardName.MATHEMATICS_QIN]: {Factory: Mathematics},
        [CardName.KING_WU_OF_QIN]: {Factory: KingWuOfQin},
        [CardName.METALLURGY]: {Factory: Metallurgy},
        [CardName.TERRACOTTA_WARRIORS]: {Factory: TerracottaWarriors},
        [CardName.EASTERN_ZHOU]: {Factory: EasternZhou},
        [CardName.GLORY_QIN]: {Factory: Glory},
        [CardName.WRITING_SYSTEMS_QIN]: {Factory: WritingSystems},
        [CardName.UNREST_QIN_NATION]: {Factory: Unrest},
        [CardName.CONFUCIANISM_QIN]: {Factory: ConfucianismQin},
        [CardName.LEGALISM]: {Factory: Legalism},
        [CardName.SCHOOL_OF_DIPLOMACY]: {Factory: SchollOfDiplomacy},
        [CardName.WESTERN_ZHOU]: {Factory: WesternZhou},
        [CardName.ADVANCE_QIN]: {Factory: Advance},
        [CardName.PROSPERITY_QIN]: {Factory: Prosperity},
        [CardName.DUKE_ZHUANG_OF_QIN]: {Factory: DukeZhuangOfQin},
        [CardName.MANDATE_OF_HEAVEN_QIN]: {Factory: MandateOfHeaven},
        [CardName.UNREST_QIN]: {Factory: Unrest1},
        [CardName.UNREST_QIN_SUPPLY3]: {Factory: Unrest2},
        [CardName.UNREST_QIN_SUPPLY4]: {Factory: Unrest3},
    },
});
