import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {EgyptiansPowerA} from "./EgyptiansPowerA";
import {EgyptiansPowerB} from "./EgyptiansPowerB";
import {Unification} from "./Unification";
import {Development} from "./Development";
import {Embalming} from "./Embalming";
import {Obelisk} from "./Obelisk";
import {RamessesII} from "./RamessesII";
import {EgyptianExpansion} from "./EgyptianExpansion";
import {Medicine} from "./Medicine";
import {Pyramids} from "./Pyramids";
import {EgyptianLegacy} from "./EgyptianLegacy";
import {RedLand} from "./RedLand";
import {Kushites} from "./Kushites";
import {Unrest} from "./Unrest";
import {FloodOfTheNile} from "./FloodOfTheNile";
import {Glory} from "./Glory";
import {Prosperity} from "./Prosperity";
import {Advance} from "./Advance";
import {EgyptianIncursion} from "./EgyptianIncursion";
import {EgyptianHieroglyphics} from "./EgyptianHieroglyphics";
import {LowerNile} from "./LowerNile";
import {NileValley} from "./NileValley";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const EGY_CARD_MANIFEST = new ModuleManifest({
    module: 'Egyptians',
    nationCards: {
        [CardName.EGYPTIANS_POWER_A]: {Factory: EgyptiansPowerA},
        [CardName.EGYPTIANS_POWER_B]: {Factory: EgyptiansPowerB},
        [CardName.UNIFICATION]: {Factory: Unification},
        [CardName.DEVELOPMENT_EGY]: {Factory: Development},
        [CardName.EMBALMING]: {Factory: Embalming},
        [CardName.OBELISK]: {Factory: Obelisk},
        [CardName.RAMESSES_II]: {Factory: RamessesII},
        [CardName.EGYPTIAN_EXPANSION]: {Factory: EgyptianExpansion},
        [CardName.MEDICINE]: {Factory: Medicine},
        [CardName.PYRAMIDS]: {Factory: Pyramids},
        [CardName.EGYPTIAN_LEGACY]: {Factory: EgyptianLegacy},
        [CardName.RED_LAND]: {Factory: RedLand},
        [CardName.KUSHITES]: {Factory: Kushites},
        [CardName.UNREST_EGY_NATION]: {Factory: Unrest},
        [CardName.FLOOD_OF_THE_NILE]: {Factory: FloodOfTheNile},
        [CardName.GLORY_EGY]: {Factory: Glory},
        [CardName.PROSPERITY_EGY]: {Factory: Prosperity},
        [CardName.ADVANCE_EGY]: {Factory: Advance},
        [CardName.EGYPTIAN_INCURSION]: {Factory: EgyptianIncursion},
        [CardName.EGYPTIAN_HIEROGLYPHICS]: {Factory: EgyptianHieroglyphics},
        [CardName.LOWER_NILE]: {Factory: LowerNile},
        [CardName.NILE_VALLEY]: {Factory: NileValley},
        [CardName.UNREST_EGY]: {Factory: Unrest1},
        [CardName.UNREST_EGY1]: {Factory: Unrest2},
    },
});
