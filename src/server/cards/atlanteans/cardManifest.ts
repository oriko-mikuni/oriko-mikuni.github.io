import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {AtlanteansPowerA} from "./AtlanteansPowerA";
import {AtlanteansPowerB} from "./AtlanteansPowerB";
import {AdvancedCulture} from "./AdvancedCulture";
import {PalaceOfPoseidon} from "./PalaceOfPoseidon";
import {SpreadOfAtlantis} from "./SpreadOfAtlantis";
import {Development} from "./Development";
import {MoatsAndWalls} from "./MoatsAndWalls";
import {MythsAndLegends} from "./MythsAndLegends";
import {VastWealth} from "./VastWealth";
import {Kleito} from "./Kleito";
import {MountainOfAtlantis} from "./MountainOfAtlantis";
import {Themiscyra} from "./Themiscyra";
import {Flood} from "./Flood";
import {Flood1} from "./Flood1";
import {Flood2} from "./Flood2";
import {Prosperity} from "./Prosperity";
import {Thule} from "./Thule";
import {Hesperides} from "./Hesperides";
import {ElysianFields} from "./ElysianFields";
import {Unrest} from "./Unrest";
import {AtlanteanFleet} from "./AtlanteanFleet";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const ATL_CARD_MANIFEST = new ModuleManifest({
    module: 'Atlanteans',
    nationCards: {
        [CardName.ATLANTEANS_POWER_A]: {Factory: AtlanteansPowerA},
        [CardName.ATLANTEANS_POWER_B]: {Factory: AtlanteansPowerB},
        [CardName.ADVANCED_CULTURE]: {Factory: AdvancedCulture},
        [CardName.PALACE_OF_POSEIDON]: {Factory: PalaceOfPoseidon},
        [CardName.SPREAD_OF_ATLANTIS]: {Factory: SpreadOfAtlantis},
        [CardName.DEVELOPMENT_ATL]: {Factory: Development},
        [CardName.MOATS_AND_WALLS]: {Factory: MoatsAndWalls},
        [CardName.MYTHS_AND_LEGENDS]: {Factory: MythsAndLegends},
        [CardName.VAST_WEALTH]: {Factory: VastWealth},
        [CardName.KLEITO]: {Factory: Kleito},
        [CardName.MOUNTAIN_OF_ATLANTIS]: {Factory: MountainOfAtlantis},
        [CardName.THEMISCYRA]: {Factory: Themiscyra},
        [CardName.FLOOD]: {Factory: Flood},
        [CardName.FLOOD1]: {Factory: Flood1},
        [CardName.FLOOD2]: {Factory: Flood2},
        [CardName.PROSPERITY_ATL]: {Factory: Prosperity},
        [CardName.THULE]: {Factory: Thule},
        [CardName.HESPERIDES]: {Factory: Hesperides},
        [CardName.ELYSIAN_FIELDS]: {Factory: ElysianFields},
        [CardName.UNREST_ATL]: {Factory: Unrest},
        [CardName.ATLANTEAN_FLEET]: {Factory: AtlanteanFleet},
        [CardName.UNREST_ATL1]: {Factory: Unrest1},
        [CardName.UNREST_ATL2]: {Factory: Unrest2},
    },
});
