import {CommonSet, CommonSetName} from "./CommonSet";
import {CardName} from "../cards/CardName";

export const MIXED_SET_A_NEW_BEGINNING: CommonSet = {
    setName: CommonSetName.A_NEW_BEGINNING,
    includeHorizons: true,
    mixed: true,
    fame: [
        CardName.PRAISEWORTHY,
        CardName.TRIUMPHANT,
        CardName.AWE_INSPIRING,
        CardName.INDEPENDENT,
        CardName.MAGNIFICENT,
        CardName.OUTSTANDING,
        CardName.SUPREME,
        CardName.INFLUENTIAL
    ],
    uncivilised: [
        CardName.ELDERS_C,
        CardName.INVASION_C_NEW,
        CardName.ORACLE_C,
        CardName.AGRICULTURE,
        CardName.CITY_C,
        CardName.CITY_C1,
        CardName.LEADERSHIP_C,
        CardName.MONUMENT,
        CardName.CODE_OF_LAWS,
        CardName.QANAT,
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.ALTAR,
        CardName.CATAMARANS,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.TRADING_CITY,
        CardName.TRADING_CITY1,
        CardName.PROTECTION,
        CardName.GOLDEN_MASK
    ],
    civilised: [
        CardName.EDUCATION_C,
        CardName.MONEYLENDER_C,
        CardName.METROPOLIS_C,
        CardName.PHARMACY,
        CardName.COINAGE,
        CardName.EXPORTS_C,
        CardName.MERCENARIES_C,
        CardName.TEMPLE,
        CardName.ASTRONOMY,
        CardName.MASONRY,
        CardName.BUCELLARII,
        CardName.TRIREMES,
    ],
    region: [
        CardName.JUNGLE_NEW,
        CardName.RIVER,
        CardName.CAPE_NEW,
        CardName.WOODLAND,
        CardName.PLAIN,
        CardName.ARCHIPELAGO_NEW,
        CardName.ISLAND_NEW,
        CardName.SAVANNAH,
        CardName.SCRUBLAND,
        CardName.BOGS,
        CardName.VALLEY,
        CardName.BORDERLAND,
        CardName.ALLUVIAL_PLAIN,
    ],
    tributary: [
        CardName.QIN,
        CardName.AKSUMITES,
        CardName.MINOANS,
        CardName.HITTITES,
        CardName.SCYTHIANS,
        CardName.PHOENICIANS,
        CardName.MACEDONIANS,
        CardName.CAROLINGIAN_KINGDOM,
        CardName.ILLYRIANS
    ],
    threePlayerAdd: [
        CardName.RITUALS_N_CEREMONIES_C,
        CardName.AMBASSADOR_NEW,
        CardName.TRADING_CITY2,
        CardName.HARBOUR_CITY,
        CardName.HEATH,
        CardName.HARRAPANS
    ],
    fourPlayerAdd: [
        CardName.NAVIGATION,
        CardName.METROPOLIS_C1,
        CardName.TAXATION,
        CardName.CIMMERIANS
    ],
    tradeRouteExpansionRemove: [
        CardName.ILLYRIANS,
        CardName.LEADERSHIP_C,
        CardName.QANAT,
        CardName.PROTECTION,
        CardName.EXPORTS_C,
        CardName.TRIREMES,
        CardName.ALLUVIAL_PLAIN
    ],
    tradeRouteExpansionAdd: [
        CardName.PUNT,
        CardName.BARTER,
        CardName.TRADING_POST,
        CardName.SEAPORT,
        CardName.IMPORTS,
        CardName.NABATAEAN_KINGDOM,
        CardName.RIVER_DELTA
    ],
    alternativeTributary: [
        [CardName.SCYTHIANS, CardName.IONIANS],
        [CardName.MINOANS, CardName.ETRUSCANS],
        [CardName.AKSUMITES, CardName.AKKADIANS],
        [CardName.MACEDONIANS, CardName.KHMER_EMPIRE],
        [CardName.QIN, CardName.SABAEANS]
    ],
    tradeRoute: [],
}

export const MIXED_SET_RISE_OF_CIVILISATIONS: CommonSet = {
    setName: CommonSetName.RISE_OF_CIVILISATIONS,
    includeHorizons: true,
    mixed: true,
    fame: [
        CardName.GREAT,
        CardName.GLORIOUS,
        CardName.PROUD,
        CardName.ACCLAIMED,
        CardName.SUPREME,
        CardName.CANNY,
        CardName.HONOURABLE,
        CardName.INTREPID
    ],
    uncivilised: [
        CardName.ELDERS_C,
        CardName.ORACLE_C,
        CardName.SHADUF,
        CardName.CITY_C,
        CardName.CITY_C1,
        CardName.DIPLOMACY_C,
        CardName.LEADERSHIP_C,
        CardName.ESPIONAGE,
        CardName.DOMESTICATION,
        CardName.WATER_MILL,
        CardName.ART,
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.CATAMARANS,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.TRADING_CITY,
        CardName.CULTURAL_DIVERSITY,
        CardName.GOLDEN_MASK,
        CardName.PIRATES
    ],
    civilised: [
        CardName.MONEYLENDER_C,
        CardName.METROPOLIS_C,
        CardName.EXPORTS_C,
        CardName.MERCENARIES_C,
        CardName.CATAPHRACT_C,
        CardName.CIVIL_SERVICE,
        CardName.AMPHITHEATRE,
        CardName.EPIC_POETRY,
        CardName.SCRIBES,
        CardName.MARKET_STALL,
        CardName.GARDENING,
        CardName.TRIREMES
    ],
    region: [
        CardName.MOUNTAIN_C_NEW,
        CardName.FOREST,
        CardName.HILLS,
        CardName.MARSH,
        CardName.STEPPE,
        CardName.FLOODPLAIN,
        CardName.FORTUNATE_ISLE,
        CardName.PENINSULA_NEW,
        CardName.VOLCANO,
        CardName.LAGOON,
        CardName.VALLEY,
        CardName.ALLUVIAL_PLAIN,
        CardName.DISTANT_ISLAND
    ],
    tributary: [
        CardName.ASSYRIANS,
        CardName.MINOANS,
        CardName.GREEKS,
        CardName.PERSIANS,
        CardName.MACEDONIANS,
        CardName.MELAYU_KINGDOM,
        CardName.GORYEO,
        CardName.SABAEANS,
        CardName.TYRRHENIANS
    ],
    threePlayerAdd: [
        CardName.AMBASSADOR_NEW,
        CardName.TRADING_CITY1,
        CardName.TRAVELLERS,
        CardName.WONDER,
        CardName.WILDERNESS_NEW,
        CardName.OLMECS
    ],
    fourPlayerAdd: [
        CardName.MINING,
        CardName.METROPOLIS_C1,
        CardName.TAXATION,
        CardName.MAURYANS
    ],
    tradeRouteExpansionRemove: [
        CardName.TYRRHENIANS,
        CardName.SHADUF,
        CardName.LEADERSHIP_C,
        CardName.PIRATES,
        CardName.EXPORTS_C,
        CardName.TRIREMES,
        CardName.WONDER,
        CardName.ALLUVIAL_PLAIN
    ],
    tradeRouteExpansionAdd: [
        CardName.PUNT,
        CardName.TRADING_POST,
        CardName.BARTER,
        CardName.SEAPORT,
        CardName.IMPORTS,
        CardName.NABATAEAN_KINGDOM,
        CardName.WAREHOUSE,
        CardName.RIVER_DELTA
    ],
    alternativeTributary: [
        [CardName.MINOANS, CardName.ETRUSCANS],
        [CardName.GREEKS, CardName.SELEUCID_EMPIRE],
        [CardName.OLMECS, CardName.HARRAPANS],
        [CardName.PERSIANS, CardName.AKKADIANS],
        [CardName.MACEDONIANS, CardName.KHMER_EMPIRE],
        [CardName.MAURYANS, CardName.CIMMERIANS]
    ],
    tradeRoute: [],
}

export const MIXED_SET_CLASH_OF_LEGACIES: CommonSet = {
    setName: CommonSetName.CLASH_OF_LEGACIES,
    includeHorizons: true,
    mixed: true,
    fame: [
        CardName.NOTORIOUS_NEW,
        CardName.MARVELLOUS,
        CardName.TRIUMPHANT,
        CardName.IMPERIAL,
        CardName.PROUD,
        CardName.EMINENT,
        CardName.DETERMINED,
        CardName.BRAVE
    ],
    uncivilised: [
        CardName.ELDERS_C,
        CardName.ORACLE_C,
        CardName.BOATS,
        CardName.CITY_C,
        CardName.CITY_C1,
        CardName.LEADERSHIP_C,
        CardName.ART,
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.TRADE_CARAVANS,
        CardName.WARFARE,
        CardName.VINEYARDS,
        CardName.CATAMARANS,
        CardName.TERRACES,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.RIVER_RAIDERS,
        CardName.TRADING_CITY,
        CardName.GOLDEN_MASK,
        CardName.PIRATES
    ],
    civilised: [
        CardName.EDUCATION_C,
        CardName.MONEYLENDER_C,
        CardName.CORRUPTION_C,
        CardName.METROPOLIS_C,
        CardName.URBAN_DEVELOPMENT_C,
        CardName.MERCENARIES_C,
        CardName.CATAPHRACT_C,
        CardName.AMPHITHEATRE,
        CardName.EPIC_POETRY,
        CardName.COURIERS,
        CardName.SMUGGLERS,
        CardName.TYRANNY,
    ],
    region: [
        CardName.COAST_NEW,
        CardName.OASIS,
        CardName.STEPPE,
        CardName.RIVER,
        CardName.RAINFOREST,
        CardName.PEAK_L_NEW,
        CardName.LAKES,
        CardName.MOOR,
        CardName.FORTIFIED_REGION_NEW,
        CardName.GRASSLAND,
        CardName.ISLAND_NEW,
        CardName.LAGOON,
        CardName.ALLUVIAL_PLAIN
    ],
    tributary: [
        CardName.ARMENIANS,
        CardName.SUMERIANS,
        CardName.ETRUSCANS,
        CardName.VIKINGS,
        CardName.CARTHAGINIANS,
        CardName.MACEDONIANS,
        CardName.MELAYU_KINGDOM,
        CardName.AKKADIANS,
        CardName.TYRRHENIANS
    ],
    threePlayerAdd: [
        CardName.RITUALS_N_CEREMONIES_C,
        CardName.AMBASSADOR_NEW,
        CardName.TRADING_CITY1,
        CardName.CARTOGRAPHY,
        CardName.HEATH,
        CardName.OLMECS
    ],
    fourPlayerAdd: [
        CardName.NAVIGATION,
        CardName.METROPOLIS_C1,
        CardName.TAXATION,
        CardName.MAURYANS
    ],
    tradeRouteExpansionRemove: [
        CardName.TYRRHENIANS,
        CardName.LEADERSHIP_C,
        CardName.RIVER_RAIDERS,
        CardName.PIRATES,
        CardName.SMUGGLERS,
        CardName.TYRANNY,
        CardName.CARTOGRAPHY,
        CardName.ALLUVIAL_PLAIN
    ],
    tradeRouteExpansionAdd: [
        CardName.PUNT,
        CardName.BARTER,
        CardName.TRADING_POST,
        CardName.SEAPORT,
        CardName.IMPORTS,
        CardName.WAREHOUSE,
        CardName.NABATAEAN_KINGDOM,
        CardName.RIVER_DELTA
    ],
    alternativeTributary: [
        [CardName.MACEDONIANS, CardName.HITTITES],
        [CardName.MAURYANS, CardName.XIONGNU],
        [CardName.VIKINGS, CardName.BYZANTINES],
        [CardName.OLMECS, CardName.HARRAPANS],
        [CardName.CARTHAGINIANS, CardName.SELEUCID_EMPIRE]
    ],
    tradeRoute: [],
}

export const MIXED_SET_THE_GOLDEN_AGES: CommonSet = {
    setName: CommonSetName.THE_GOLDEN_AGES,
    includeHorizons: true,
    mixed: true,
    fame: [
        CardName.PRAISEWORTHY,
        CardName.GREAT,
        CardName.GLORIOUS,
        CardName.TRIUMPHANT,
        CardName.MAGNIFICENT,
        CardName.PROUD,
        CardName.ACCLAIMED,
        CardName.SUPREME
    ],
    uncivilised: [
        CardName.ELDERS_C,
        CardName.SHRINE,
        CardName.ORACLE_C,
        CardName.AGRICULTURE,
        CardName.CITY_C,
        CardName.CITY_C1,
        CardName.PORT,
        CardName.DIPLOMACY_C,
        CardName.LEADERSHIP_C,
        CardName.QANAT,
        CardName.ROAD_BUILDING,
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.ALTAR,
        CardName.CATAMARANS,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.TRADING_CITY,
        CardName.CULTURAL_DIVERSITY,
        CardName.GOLDEN_MASK
    ],
    civilised: [
        CardName.EDUCATION_C,
        CardName.MONEYLENDER_C,
        CardName.METROPOLIS_C,
        CardName.PHARMACY,
        CardName.MERCENARIES_C,
        CardName.TEMPLE,
        CardName.ASTRONOMY,
        CardName.CIVIL_SERVICE,
        CardName.SCRIBES,
        CardName.EPIC_POETRY,
        CardName.MARKET_STALL,
        CardName.GARDENING
    ],
    region: [
        CardName.HILLS,
        CardName.STEPPE,
        CardName.RIVER,
        CardName.FORTUNATE_ISLE,
        CardName.RAINFOREST,
        CardName.PENINSULA_NEW,
        CardName.LAKES,
        CardName.PLAIN,
        CardName.GRASSLAND,
        CardName.LAGOON,
        CardName.RIFT_VALLEY,
        CardName.ALLUVIAL_PLAIN,
        CardName.DISTANT_ISLAND
    ],
    tributary: [
        CardName.ASSYRIANS,
        CardName.SUMERIANS,
        CardName.MINOANS,
        CardName.GREEKS,
        CardName.MACEDONIANS,
        CardName.AKKADIANS,
        CardName.BYZANTINES,
        CardName.CAROLINGIAN_KINGDOM,
        CardName.SABAEANS
    ],
    threePlayerAdd: [
        CardName.AMBASSADOR_NEW,
        CardName.ART,
        CardName.TRADING_CITY1,
        CardName.WONDER,
        CardName.SACRED_GROVE,
        CardName.HARRAPANS
    ],
    fourPlayerAdd: [
        CardName.NAVIGATION,
        CardName.METROPOLIS_C1,
        CardName.CARTOGRAPHY,
        CardName.MAURYANS
    ],
    tradeRouteExpansionRemove: [
        CardName.ASSYRIANS,
        CardName.PORT,
        CardName.LEADERSHIP_C,
        CardName.QANAT,
        CardName.METROPOLIS_C1,
        CardName.ASTRONOMY,
        CardName.EPIC_POETRY,
        CardName.ALLUVIAL_PLAIN
    ],
    tradeRouteExpansionAdd: [
        CardName.PUNT,
        CardName.SEAPORT,
        CardName.BARTER,
        CardName.TRADING_POST,
        CardName.HARBOUR_CITY,
        CardName.NABATAEAN_KINGDOM,
        CardName.IMPORTS,
        CardName.RIVER_DELTA
    ],
    alternativeTributary: [
        [CardName.MACEDONIANS, CardName.HITTITES],
        [CardName.MINOANS, CardName.ETRUSCANS],
        [CardName.GREEKS, CardName.SELEUCID_EMPIRE],
        [CardName.MAURYANS, CardName.CIMMERIANS]
    ],
    tradeRoute: [],
}

export const MIXED_SET_WAY_OF_THE_CONQUEROR: CommonSet = {
    setName: CommonSetName.WAY_OF_THE_CONQUEROR,
    includeHorizons: true,
    mixed: true,
    fame: [
        CardName.NOTORIOUS_NEW,
        CardName.TRIUMPHANT,
        CardName.AWE_INSPIRING,
        CardName.OUTSTANDING,
        CardName.EMINENT,
        CardName.SUPREME,
        CardName.DETERMINED,
        CardName.BRAVE
    ],
    uncivilised: [
        CardName.ELDERS_C,
        CardName.ORACLE_C,
        CardName.CITY_C,
        CardName.CITY_C1,
        CardName.PORT,
        CardName.LEADERSHIP_C,
        CardName.ESPIONAGE,
        CardName.MONUMENT,
        CardName.UNDECIPHERABLE_SCROLL,
        CardName.WARFARE,
        CardName.VINEYARDS,
        CardName.CATAMARANS,
        CardName.HUNTERS_AND_TRACKERS,
        CardName.RIVER_RAIDERS,
        CardName.TRADING_CITY,
        CardName.PROTECTION,
        CardName.GOLDEN_MASK,
        CardName.PIRATES
    ],
    civilised: [
        CardName.MONEYLENDER_C,
        CardName.CORRUPTION_C,
        CardName.METROPOLIS_C,
        CardName.MERCENARIES_C,
        CardName.TEMPLE,
        CardName.CATAPHRACT_C,
        CardName.ASTRONOMY,
        CardName.CIVIL_SERVICE,
        CardName.SCRIBES,
        CardName.SMUGGLERS,
        CardName.GARDENING,
        CardName.TYRANNY
    ],
    region: [
        CardName.MOUNTAIN_C_NEW,
        CardName.RIVER,
        CardName.CAPE_NEW,
        CardName.WOODLAND,
        CardName.PLAIN,
        CardName.ARCHIPELAGO_NEW,
        CardName.FORTIFIED_REGION_NEW,
        CardName.GRASSLAND,
        CardName.VOLCANO,
        CardName.GLACIER,
        CardName.BORDERLAND,
        CardName.ALLUVIAL_PLAIN,
        CardName.DISTANT_ISLAND
    ],
    tributary: [
        CardName.SUMERIANS,
        CardName.VIKINGS,
        CardName.PHOENICIANS,
        CardName.PERSIANS,
        CardName.MACEDONIANS,
        CardName.CAROLINGIAN_KINGDOM,
        CardName.KHMER_EMPIRE,
        CardName.ILLYRIANS,
        CardName.TYRRHENIANS,
    ],
    threePlayerAdd: [
        CardName.RITUALS_N_CEREMONIES_C,
        CardName.AMBASSADOR_NEW,
        CardName.TRADING_CITY1,
        CardName.METROPOLIS_C1,
        CardName.WILDERNESS_NEW,
        CardName.SCYTHIANS
    ],
    fourPlayerAdd: [
        CardName.ALTAR,
        CardName.DRAMA_N_POETRY_C,
        CardName.TAXATION,
        CardName.BYZANTINES
    ],
    tradeRouteExpansionRemove: [
        CardName.CAROLINGIAN_KINGDOM,
        CardName.PORT,
        CardName.LEADERSHIP_C,
        CardName.ASTRONOMY,
        CardName.METROPOLIS_C1,
        CardName.ALLUVIAL_PLAIN
    ],
    tradeRouteExpansionAdd: [
        CardName.PUNT,
        CardName.SEAPORT,
        CardName.BARTER,
        CardName.NABATAEAN_KINGDOM,
        CardName.HARBOUR_CITY,
        CardName.RIVER_DELTA
    ],
    alternativeTributary: [
        [CardName.SCYTHIANS, CardName.IONIANS],
        [CardName.MACEDONIANS, CardName.HITTITES],
        [CardName.VIKINGS, CardName.XIONGNU],
        [CardName.PERSIANS, CardName.AKKADIANS]
    ],
    tradeRoute: [],
}
