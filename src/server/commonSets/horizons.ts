import {CommonSet, CommonSetName} from "./CommonSet";
import {CardName} from "../../common/cards/CardName";

export const HORIZONS_COMMON_SET: CommonSet = {
    setName: CommonSetName.HORIZONS,
    includeHorizons: true,
    fame: [
        CardName.SUPREME,
        CardName.SUPREME1,
        CardName.DETERMINED,
        CardName.CANNY,
        CardName.HONOURABLE,
        CardName.BRAVE,
        CardName.INTREPID,
        CardName.INFLUENTIAL
    ],
    uncivilised: [
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.ELDERS_H,
        CardName.TRADE_CARAVANS,
        CardName.WARFARE,
        CardName.ALTAR,
        CardName.ORACLE_H,
        CardName.VINEYARDS,
        CardName.CATAMARANS,
        CardName.TERRACES,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.RIVER_RAIDERS,
        CardName.TRADING_CITY,
        CardName.TRADING_CITY1,
        CardName.CITY_H,
        CardName.CULTURAL_DIVERSITY,
        CardName.PROTECTION,
        CardName.GOLDEN_MASK,
        CardName.PIRATES
    ],
    civilised: [
        CardName.EPIC_POETRY,
        CardName.MONEYLENDER_H,
        CardName.SCRIBES,
        CardName.METROPOLIS_H,
        CardName.COURIERS,
        CardName.SMUGGLERS,
        CardName.MARKET_STALL,
        CardName.MERCENARIES_H,
        CardName.GARDENING,
        CardName.BUCELLARII,
        CardName.TYRANNY,
        CardName.TRIREMES
    ],
    region: [
        CardName.VOLCANO,
        CardName.MANGROVE,
        CardName.LAGOON,
        CardName.RIFT_VALLEY,
        CardName.GLACIER,
        CardName.SAVANNAH,
        CardName.SCRUBLAND,
        CardName.BOGS,
        CardName.VALLEY,
        CardName.BORDERLAND,
        CardName.ALLUVIAL_PLAIN,
        CardName.DISTANT_ISLAND
    ],
    tributary: [
        CardName.MELAYU_KINGDOM,
        CardName.GORYEO,
        CardName.AKKADIANS,
        CardName.BYZANTINES,
        CardName.SELEUCID_EMPIRE,
        CardName.CAROLINGIAN_KINGDOM,
        CardName.KHMER_EMPIRE,
        CardName.SABAEANS,
        CardName.ILLYRIANS,
        CardName.TYRRHENIANS
    ],
    tradeRoute: [],
    threePlayerAdd: [
        CardName.PRIESTHOOD,
        CardName.TRADING_CITY2,
        CardName.TRAVELLERS,
        CardName.HARBOUR_CITY,
        CardName.HEATH,
        CardName.HARRAPANS
    ],
    fourPlayerAdd: [
        CardName.NAVIGATION,
        CardName.TAXATION,
        CardName.MAGISTRATE,
        CardName.CIMMERIANS
    ],
    alternativeTributary: [],
    tradeRouteExpansionRemove: [
        CardName.WARFARE,
        CardName.RIVER_RAIDERS,
        CardName.PROTECTION,
        CardName.PIRATES,
        CardName.SMUGGLERS,
        CardName.TYRANNY,
        CardName.TRIREMES,
        CardName.ILLYRIANS,
        CardName.TYRRHENIANS
    ],
    tradeRouteExpansionAdd: [
        CardName.TRADING_POST,
        CardName.SEAPORT,
        CardName.BARTER,
        CardName.NABATAEAN_KINGDOM,
        CardName.WAREHOUSE,
        CardName.IMPORTS,
        CardName.RIVER_DELTA,
        CardName.PUNT
    ]
}
