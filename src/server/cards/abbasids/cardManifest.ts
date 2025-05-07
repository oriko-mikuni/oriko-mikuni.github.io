import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {AbbasidsPowerA} from "./AbbasidsPowerA";
import {AbbasidsPowerB} from "./AbbasidsPowerB";
import {Baghdad} from "./Baghdad";
import {DredgingTheTigris} from "./DredgingTheTigris";
import {GlassWorking} from "./GlassWorking";
import {AlMaMun} from "./AlMaMun";
import {GrandLibraryOfBaghdad} from "./GrandLibraryOfBaghdad";
import {GrandCaliphate} from "./GrandCaliphate";
import {TurkishMercenaries} from "./TurkishMercenaries";
import {Glory} from "./Glory";
import {AlMansur} from "./AlMansur";
import {MaritimeSpiceRoute} from "./MaritimeSpiceRoute";
import {WesternSilkRoad} from "./WesternSilkRoad";
import {Jazira} from "./Jazira";
import {GrandMosqueOfDamascus} from "./GrandMosqueOfDamascus";
import {Unrest} from "./Unrest";
import {Prosperity} from "./Prosperity";
import {Advance} from "./Advance";
import {AbbasidRevolution} from "./AbbasidRevolution";
import {Khorosan} from "./Khorosan";
import {Conquer} from "./Conquer";
import {Irrigation} from "./Irrigation";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const ABB_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.ABBASIDS,
    nationCards: {
        [CardName.ABBASIDS_POWER_A]: {Factory: AbbasidsPowerA},
        [CardName.ABBASIDS_POWER_B]: {Factory: AbbasidsPowerB},
        [CardName.BAGHDAD]: {Factory: Baghdad},
        [CardName.DREDGING_THE_TIGRIS]: {Factory: DredgingTheTigris},
        [CardName.GLASS_WORKING]: {Factory: GlassWorking},
        [CardName.AL_MA_MUN]: {Factory: AlMaMun},
        [CardName.GRAND_LIBRARY_OF_BAGHDAD]: {Factory: GrandLibraryOfBaghdad},
        [CardName.GRAND_CALIPHATE]: {Factory: GrandCaliphate},
        [CardName.TURKISH_MERCENARIES]: {Factory: TurkishMercenaries},
        [CardName.GLORY_ABB]: {Factory: Glory},
        [CardName.AL_MANSUR]: {Factory: AlMansur},
        [CardName.MARITIME_SPICE_ROUTE_ABB]: {Factory: MaritimeSpiceRoute},
        [CardName.WESTERN_SILK_ROAD_ABB]: {Factory: WesternSilkRoad},
        [CardName.JAZIRA]: {Factory: Jazira},
        [CardName.GRAND_MOSQUE_OF_DAMASCUS]: {Factory: GrandMosqueOfDamascus},
        [CardName.UNREST_ABB]: {Factory: Unrest},
        [CardName.PROSPERITY_ABB]: {Factory: Prosperity},
        [CardName.ADVANCE_ABB]: {Factory: Advance},
        [CardName.ABBASID_REVOLUTION]: {Factory: AbbasidRevolution},
        [CardName.KHOROSAN]: {Factory: Khorosan},
        [CardName.CONQUER_ABB]: {Factory: Conquer},
        [CardName.IRRIGATION]: {Factory: Irrigation},
        [CardName.UNREST_ABB1]: {Factory: Unrest1},
        [CardName.UNREST_ABB2]: {Factory: Unrest2},
    },
});
