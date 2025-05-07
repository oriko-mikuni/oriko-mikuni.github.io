import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {GuptasPowerA} from "./GuptasPowerA";
import {GuptasPowerB} from "./GuptasPowerB";
import {Glory} from "./Glory";
import {ChandraguptaI} from "./ChandraguptaI";
import {ChandraguptaII} from "./ChandraguptaII";
import {JudicialSystem} from "./JudicialSystem";
import {Science} from "./Science";
import {Philosophy} from "./Philosophy";
import {Mahabharata} from "./Mahabharata";
import {AdvancedMathematics} from "./AdvancedMathematics";
import {Shreni} from "./Shreni";
import {Sarthavaha} from "./Sarthavaha";
import {HeightOfCivilisation} from "./HeightOfCivilisation";
import {RockCutArchitecture} from "./RockCutArchitecture";
import {Ayurveda} from "./Ayurveda";
import {GangaRiverValley} from "./GangaRiverValley";
import {IndusRiverValley} from "./IndusRiverValley";
import {SriGupta} from "./SriGupta";
import {Advance} from "./Advance";
import {Conquer} from "./Conquer";
import {Prosperity} from "./Prosperity";
import {TheGreatPataliputra} from "./TheGreatPataliputra";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const GUP_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.GUPTAS,
    nationCards: {
        [CardName.GUPTAS_POWER_A]: {Factory: GuptasPowerA},
        [CardName.GUPTAS_POWER_B]: {Factory: GuptasPowerB},
        [CardName.GLORY_GUP]: {Factory: Glory},
        [CardName.CHANDRAGUPTA_I]: {Factory: ChandraguptaI},
        [CardName.CHANDRAGUPTA_II]: {Factory: ChandraguptaII},
        [CardName.JUDICIAL_SYSTEM]: {Factory: JudicialSystem},
        [CardName.SCIENCE_GUP]: {Factory: Science},
        [CardName.PHILOSOPHY_GUP]: {Factory: Philosophy},
        [CardName.MAHABHARATA]: {Factory: Mahabharata},
        [CardName.ADVANCED_MATHEMATICS_GUP]: {Factory: AdvancedMathematics},
        [CardName.SHRENI]: {Factory: Shreni},
        [CardName.SARTHAVAHA]: {Factory: Sarthavaha},
        [CardName.HEIGHT_OF_CIVILISATION]: {Factory: HeightOfCivilisation},
        [CardName.ROCK_CUT_ARCHITECTURE]: {Factory: RockCutArchitecture},
        [CardName.AYURVEDA]: {Factory: Ayurveda},
        [CardName.GANGA_RIVER_VALLEY]: {Factory: GangaRiverValley},
        [CardName.INDUS_RIVER_VALLEY]: {Factory: IndusRiverValley},
        [CardName.SRI_GUPTA]: {Factory: SriGupta},
        [CardName.ADVANCE_GUP]: {Factory: Advance},
        [CardName.CONQUER_GUP]: {Factory: Conquer},
        [CardName.PROSPERITY_GUP]: {Factory: Prosperity},
        [CardName.THE_GREAT_PATALIPUTRA]: {Factory: TheGreatPataliputra},
        [CardName.UNREST_GUP]: {Factory: Unrest},
        [CardName.UNREST_GUP1]: {Factory: Unrest1},
        [CardName.UNREST_GUP_SUPPLY]: {Factory: Unrest2},
    },
});
