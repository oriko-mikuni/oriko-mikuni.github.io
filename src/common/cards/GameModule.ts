export const GAME_MODULES = [
    'ClassicsCommon',
    'LegendsCommon',
    'HorizonsUpdated',
    'HorizonsCommon',
    'TradeRouteExpansion',
    
    // classics nations
    "Carthaginians",
    "Celts",
    "Greeks",
    "Macedonians",
    "Persians",
    "Romans",
    "Scythians",
    "Vikings",

    // legends nations
    "Arthurians",
    "Atlanteans",
    "Egyptians",
    "Mauryans",
    "Minoans",
    "Olmecs",
    "Qin",
    "Utopians",

    // horizons nations
    "Abbasids",
    "Aksumites",
    "Cultists",
    "Guptas",
    "Inuit",
    "Japanese",
    "Magyars",
    "Mayans",
    "Martians",
    "Polynesians",
    "Sassanids",
    "Taino",
    "Tang",
    "Wagadou",
    'TradeRouteExpansion',
] as const;
export type GameModule = typeof GAME_MODULES[number];