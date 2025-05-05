import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {CultistsPowerA} from "./CultistsPowerA";
import {CultistsPowerB} from "./CultistsPowerB";
import {ResearchTheCeremony} from "./ResearchTheCeremony";
import {PrepareTheCeremony} from "./PrepareTheCeremony";
import {CeremonialGathering} from "./CeremonialGathering";
import {CeremonyOfTheKey} from "./CeremonyOfTheKey";
import {DarkRitual} from "./DarkRitual";
import {Indoctrination} from "./Indoctrination";
import {BloodSacrifice} from "./BloodSacrifice";
import {Temptation} from "./Temptation";
import {UnholyShrine} from "./UnholyShrine";
import {SpreadingChaos} from "./SpreadingChaos";
import {CloakAndDagger} from "./CloakAndDagger";
import {FallenTown} from "./FallenTown";
import {Corruption} from "./Corruption";
import {StrangeSigns} from "./StrangeSigns";
import {CursedLibrary} from "./CursedLibrary";
import {FrozenWaste} from "./FrozenWaste";
import {LureOfDecadence} from "./LureOfDecadence";
import {Oracle} from "./Oracle";
import {UnspeakableWorship} from "./UnspeakableWorship";
import {SummonAid} from "./SummonAid";
import {TwistedGrove} from "./TwistedGrove";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Chaos} from "./Chaos";
import {Chaos1} from "./Chaos1";
import {Chaos2} from "./Chaos2";
import {Chaos3} from "./Chaos3";
import {Chaos4} from "./Chaos4";
import {Corrupted} from "./Corrupted";
import {Summoned} from "./Summoned";

export const CUL_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.CULTISTS,
    nationCards: {
        [CardName.CULTISTS_POWER_A]: {Factory: CultistsPowerA},
        [CardName.CULTISTS_POWER_B]: {Factory: CultistsPowerB},
        [CardName.RESEARCH_THE_CEREMONY]: {Factory: ResearchTheCeremony},
        [CardName.PREPARE_THE_CEREMONY]: {Factory: PrepareTheCeremony},
        [CardName.CEREMONIAL_GATHERING]: {Factory: CeremonialGathering},
        [CardName.CEREMONY_OF_THE_KEY]: {Factory: CeremonyOfTheKey},
        [CardName.DARK_RITUAL]: {Factory: DarkRitual},
        [CardName.INDOCTRINATION]: {Factory: Indoctrination},
        [CardName.BLOOD_SACRIFICE]: {Factory: BloodSacrifice},
        [CardName.TEMPTATION]: {Factory: Temptation},
        [CardName.UNHOLY_SHRINE]: {Factory: UnholyShrine},
        [CardName.SPREADING_CHAOS]: {Factory: SpreadingChaos},
        [CardName.CLOAK_AND_DAGGER]: {Factory: CloakAndDagger},
        [CardName.FALLEN_TOWN]: {Factory: FallenTown},
        [CardName.CORRUPTION_CUL]: {Factory: Corruption},
        [CardName.STRANGE_SIGNS]: {Factory: StrangeSigns},
        [CardName.CURSED_LIBRARY]: {Factory: CursedLibrary},
        [CardName.FROZEN_WASTE]: {Factory: FrozenWaste},
        [CardName.LURE_OF_DECADENCE]: {Factory: LureOfDecadence},
        [CardName.ORACLE_CUL]: {Factory: Oracle},
        [CardName.UNSPEAKABLE_WORSHIP]: {Factory: UnspeakableWorship},
        [CardName.SUMMON_AID]: {Factory: SummonAid},
        [CardName.TWISTED_GROVE]: {Factory: TwistedGrove},
        [CardName.UNREST_CUL_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_CUL_SUPPLY1]: {Factory: Unrest1},
        [CardName.UNREST_CUL_SUPPLY2]: {Factory: Unrest2},
        [CardName.UNREST_CUL_SUPPLY3]: {Factory: Unrest3},
        [CardName.CHAOS_CUL_SUPPLY]: {Factory: Chaos},
        [CardName.CHAOS_CUL_SUPPLY_1]: {Factory: Chaos1},
        [CardName.CHAOS_CUL_SUPPLY_2]: {Factory: Chaos2},
        [CardName.CHAOS_CUL_SUPPLY3]: {Factory: Chaos3},
        [CardName.CHAOS_CUL_SUPPLY4]: {Factory: Chaos4},
        [CardName.CORRUPTED_CUL]: {Factory: Corrupted},
        [CardName.SUMMONED_CUL]: {Factory: Summoned},
    },
});
