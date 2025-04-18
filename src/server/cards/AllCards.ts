import { ModuleManifest } from "./ModuleManifest";
import {CLASSICS_COMMON_CARD_MANIFEST} from "./classics/cardManifest";
import {LEGENDS_COMMON_CARD_MANIFEST} from "./legends/cardManifest";
import {HORIZONS_UPDATED_COMMON_CARD_MANIFEST} from "./horizonUpdate/cardManifest";
import {CAR_CARD_MANIFEST} from "./carthaginians/cardManifest";
import {CEL_CARD_MANIFEST} from "./celts/cardManifest";
import {PER_CARD_MANIFEST} from "./persians/cardManifest";
import {ROM_CARD_MANIFEST} from "./romans/cardManifest";
import {MAC_CARD_MANIFEST} from "./macedonians/cardManifest";
import {SCY_CARD_MANIFEST} from "./scythians/cardManifest";
import {GRE_CARD_MANIFEST} from "./greeks/cardManifest";
import {VIK_CARD_MANIFEST} from "./vikings/cardManifest";
import {MAU_CARD_MANIFEST} from "./mauryans/cardManifest";
import {MIN_CARD_MANIFEST} from "./minoans/cardManifest";
import {QIN_CARD_MANIFEST} from "./qin/cardManifest";
import {EGY_CARD_MANIFEST} from "./egyptians/cardManifest";
import {ATL_CARD_MANIFEST} from "./atlanteans/cardManifest";
import {OLM_CARD_MANIFEST} from "./olmecs/cardManifest";
import {ART_CARD_MANIFEST} from "./arthurians/cardManifest";
import {UTO_CARD_MANIFEST} from "./utopians/cardManifest";
import {COMMON_CARD_MANIFEST} from "./common/cardManifest";

export const ALL_MODULE_MANIFEST: Array<ModuleManifest> = [
    CAR_CARD_MANIFEST,
    CEL_CARD_MANIFEST,
    GRE_CARD_MANIFEST,
    MAC_CARD_MANIFEST,
    PER_CARD_MANIFEST,
    ROM_CARD_MANIFEST,
    SCY_CARD_MANIFEST,
    VIK_CARD_MANIFEST,

    ART_CARD_MANIFEST,
    ATL_CARD_MANIFEST,
    EGY_CARD_MANIFEST,
    MAU_CARD_MANIFEST,
    MIN_CARD_MANIFEST,
    OLM_CARD_MANIFEST,
    QIN_CARD_MANIFEST,
    UTO_CARD_MANIFEST,

    // MAG_CARD_MANIFEST,
    // JPN_CARD_MANIFEST,
    // TAI_CARD_MANIFEST,
    // INU_CARD_MANIFEST,
    // MAY_CARD_MANIFEST,
    // MRT_CARD_MANIFEST,
    // POL_CARD_MANIFEST,
    // CUL_CARD_MANIFEST,

    // ABB_CARD_MANIFEST,
    // AKS_CARD_MANIFEST,
    // GUP_CARD_MANIFEST,
    // TAN_CARD_MANIFEST,
    // WAG_CARD_MANIFEST,
    // SAS_CARD_MANIFEST,

    COMMON_CARD_MANIFEST,
    CLASSICS_COMMON_CARD_MANIFEST,
    LEGENDS_COMMON_CARD_MANIFEST,
    HORIZONS_UPDATED_COMMON_CARD_MANIFEST,
    // HORIZONS_COMMON_CARD_MANIFEST,
    // TRADE_ROUTE_EXPANSION_CARD_MANIFEST,
];
