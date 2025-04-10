import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest2} from "./Unrest2";
import {OlmecsPowerA} from "./OlmecsPowerA";
import {OlmecsPowerB} from "./OlmecsPowerB";
import {SanLorenzoTenochtitlan} from "./SanLorenzoTenochtitlan";
import {StepPyramid} from "./StepPyramid";
import {RitualSacrifice} from "./RitualSacrifice";
import {OlmecTraders} from "./OlmecTraders";
import {TresZapotes} from "./TresZapotes";
import {StoneHeads} from "./StoneHeads";
import {DrainageSystem} from "./DrainageSystem";
import {Cacao} from "./Cacao";
import {OlmecHieroglyphics} from "./OlmecHieroglyphics";
import {Calendar} from "./Calendar";
import {StoneMask} from "./StoneMask";
import {StoneMask1} from "./StoneMask1";
import {LodestoneCompass} from "./LodestoneCompass";
import {BallGames} from "./BallGames";
import {LagunaDeLosCerros} from "./LagunaDeLosCerros";
import {LaVenta} from "./LaVenta";
import {StoneMask2} from "./StoneMask2";
import {StoneMask3} from "./StoneMask3";
import {StoneMask4} from "./StoneMask4";
import {StoneMask5} from "./StoneMask5";
import {StoneMask6} from "./StoneMask6";
import {StoneMask7} from "./StoneMask7";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";

export const OLM_CARD_MANIFEST = new ModuleManifest({
    module: 'Olmecs',
    nationCards: {
        [CardName.OLMECS_POWER_A]: {Factory: OlmecsPowerA},
        [CardName.OLMECS_POWER_B]: {Factory: OlmecsPowerB},
        [CardName.SAN_LORENZO_TENOCHTITLAN]: {Factory: SanLorenzoTenochtitlan},
        [CardName.STEP_PYRAMIDS]: {Factory: StepPyramid},
        [CardName.RITUAL_SACRIFICE]: {Factory: RitualSacrifice},
        [CardName.OLMEC_TRADERS]: {Factory: OlmecTraders},
        [CardName.TRES_ZAPOTES]: {Factory: TresZapotes},
        [CardName.STONE_HEADS]: {Factory: StoneHeads},
        [CardName.DRAINAGE_SYSTEM_OLM]: {Factory: DrainageSystem},
        [CardName.CACAO]: {Factory: Cacao},
        [CardName.OLMEC_HIEROGLYPHICS]: {Factory: OlmecHieroglyphics},
        [CardName.CALENDAR]: {Factory: Calendar},
        [CardName.STONE_MASK_OLM]: {Factory: StoneMask},
        [CardName.STONE_MASK_OLM1]: {Factory: StoneMask1},
        [CardName.LODESTONE_COMPASS]: {Factory: LodestoneCompass},
        [CardName.BALL_GAMES]: {Factory: BallGames},
        [CardName.LAGUNA_DE_LOS_CERROS]: {Factory: LagunaDeLosCerros},
        [CardName.LA_VENTA]: {Factory: LaVenta},
        [CardName.STONE_MASK_OLM2]: {Factory: StoneMask2},
        [CardName.STONE_MASK_OLM3]: {Factory: StoneMask3},
        [CardName.STONE_MASK_OLM4]: {Factory: StoneMask4},
        [CardName.STONE_MASK_OLM5]: {Factory: StoneMask5},
        [CardName.STONE_MASK_OLM6]: {Factory: StoneMask6},
        [CardName.STONE_MASK_OLM7]: {Factory: StoneMask7},
        [CardName.UNREST_OLM_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_OLM_SUPPLY3]: {Factory: Unrest1},
        [CardName.UNREST_OLM_SUPPLY4]: {Factory: Unrest2},
    },
});
