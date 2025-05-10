import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {TangPowerA} from "./TangPowerA";
import {TangPowerB} from "./TangPowerB";
import {Poetry} from "./Poetry";
import {SaltIndustryCommission} from "./SaltIndustryCommission";
import {EasternSilkRoad} from "./EasternSilkRoad";
import {TeaDrinking} from "./TeaDrinking";
import {Confucianism} from "./Confucianism";
import {Porcelain} from "./Porcelain";
import {Fireworks} from "./Fireworks";
import {WoodBlockPrinting} from "./WoodBlockPrinting";
import {YuXuanji} from "./YuXuanji";
import {CosmopolitanCulture} from "./CosmopolitanCulture";
import {Luoyang} from "./Luoyang";
import {ChanBuddhism} from "./ChanBuddhism";
import {EmpressWuZetian} from "./EmpressWuZetian";
import {Taoism} from "./Taoism";
import {ImperialExaminations} from "./ImperialExaminations";
import {ScholarOfficials} from "./ScholarOfficials";
import {MinistryOfTheArmy} from "./MinistryOfTheArmy";
import {ChangAn} from "./ChangAn";
import {GuangZhou} from "./GuangZhou";
import {TangProsperity} from "./TangProsperity";
import {EmperorTaizong} from "./EmperorTaizong";
import {MandateOfHeaven} from "./MandateOfHeaven";
import {Rebellion} from "./Rebellion";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const TAN_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.TANG,
    nationCards: {
        [CardName.TANG_POWER_A]: {Factory: TangPowerA},
        [CardName.TANG_POWER_B]: {Factory: TangPowerB},
        [CardName.POETRY]: {Factory: Poetry},
        [CardName.SALT_INDUSTRY_COMMISSION]: {Factory: SaltIndustryCommission},
        [CardName.EASTERN_SILK_ROAD]: {Factory: EasternSilkRoad},
        [CardName.TEA_DRINKING]: {Factory: TeaDrinking},
        [CardName.CONFUCIANISM_TAN]: {Factory: Confucianism},
        [CardName.PORCELAIN]: {Factory: Porcelain},
        [CardName.FIREWORKS]: {Factory: Fireworks},
        [CardName.WOOD_BLOCK_PRINTING]: {Factory: WoodBlockPrinting},
        [CardName.YU_XUANJI]: {Factory: YuXuanji},
        [CardName.COSMOPOLITAN_CULTURE]: {Factory: CosmopolitanCulture},
        [CardName.LUOYANG]: {Factory: Luoyang},
        [CardName.CHAN_BUDDHISM]: {Factory: ChanBuddhism},
        [CardName.EMPRESS_WU_ZETIAN]: {Factory: EmpressWuZetian},
        [CardName.TAOISM]: {Factory: Taoism},
        [CardName.IMPERIAL_EXAMINATIONS]: {Factory: ImperialExaminations},
        [CardName.SCHOLAR_OFFICIALS]: {Factory: ScholarOfficials},
        [CardName.MINISTRY_OF_THE_ARMY]: {Factory: MinistryOfTheArmy},
        [CardName.CHANG_AN]: {Factory: ChangAn},
        [CardName.GUANGZHOU]: {Factory: GuangZhou},
        [CardName.TANG_PROSPERITY]: {Factory: TangProsperity},
        [CardName.EMPEROR_TAIZONG]: {Factory: EmperorTaizong},
        [CardName.MANDATE_OF_HEAVEN_TAN]: {Factory: MandateOfHeaven},
        [CardName.REBELLION]: {Factory: Rebellion},
        [CardName.UNREST_TAN_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_TAN_SUPPLY1]: {Factory: Unrest1},
        [CardName.UNREST_TAN_SUPPLY2]: {Factory: Unrest2},
    },
});
