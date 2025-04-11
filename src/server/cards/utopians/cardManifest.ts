import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Unrest4} from "./Unrest4";
import {UtopiansPowerA} from "./UtopiansPowerA";
import {UtopiansPowerB} from "./UtopiansPowerB";
import {VisionsOfShangrila} from "./VisionsOfShangrila";
import {PathToShangrila} from "./PathToShangrila";
import {GatesOfShangrila} from "./GatesOfShangrila";
import {Shangrila} from "./Shangrila";
import {Monastery} from "./Monastery";
import {Portals} from "./Portals";
import {Daochang} from "./Daochang";
import {LostTomes} from "./LostTomes";
import {TreeOfKnowledge} from "./TreeOfKnowledge";
import {Charity} from "./Charity";
import {Meditation} from "./Meditation";
import {MountainRetreat} from "./MountainRetreat";
import {SacredScroll} from "./SacredScroll";
import {SacredScroll1} from "./SacredScroll1";
import {SacredScroll2} from "./SacredScroll2";
import {SacredScroll3} from "./SacredScroll3";
import {SacredScroll4} from "./SacredScroll4";
import {Unrest} from "./Unrest";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {GameModule} from "../../../common/cards/GameModule";

export const UTO_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.UTOPIANS,
    nationCards: {
        [CardName.UTOPIANS_POWER_A]: {Factory: UtopiansPowerA},
        [CardName.UTOPIANS_POWER_B]: {Factory: UtopiansPowerB},
        [CardName.VISIONS_OF_SHANGRILA]: {Factory: VisionsOfShangrila},
        [CardName.PATH_TO_SHANGRILA]: {Factory: PathToShangrila},
        [CardName.GATES_OF_SHANGRILA]: {Factory: GatesOfShangrila},
        [CardName.SHANGRILA]: {Factory: Shangrila},
        [CardName.MONASTERY]: {Factory: Monastery},
        [CardName.PORTALS]: {Factory: Portals},
        [CardName.DAOCHANG]: {Factory: Daochang},
        [CardName.LOST_TOMES]: {Factory: LostTomes},
        [CardName.TREE_OF_KNOWLEDGE]: {Factory: TreeOfKnowledge},
        [CardName.CHARITY]: {Factory: Charity},
        [CardName.MEDITATION]: {Factory: Meditation},
        [CardName.MOUNTAIN_RETREAT]: {Factory: MountainRetreat},
        [CardName.SACRED_SCROLL]: {Factory: SacredScroll},
        [CardName.SACRED_SCROLL1]: {Factory: SacredScroll1},
        [CardName.SACRED_SCROLL2]: {Factory: SacredScroll2},
        [CardName.SACRED_SCROLL3]: {Factory: SacredScroll3},
        [CardName.SACRED_SCROLL4]: {Factory: SacredScroll4},
        [CardName.UNREST_UTO_SUPPLY]: {Factory: Unrest},
        [CardName.UNREST_UTO_SUPPLY_1]: {Factory: Unrest1},
        [CardName.UNREST_UTO_SUPPLY_2]: {Factory: Unrest2},
        [CardName.UNREST_UTO_SUPPLY3]: {Factory: Unrest3},
        [CardName.UNREST_UTO_SUPPLY4]: {Factory: Unrest4},
    },
});
