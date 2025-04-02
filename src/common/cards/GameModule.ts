export const GAME_MODULES = [
    'Classics Common',
    'Legends Common',
    'Horizons Updated Commons',
    'Horizons Common',
    'Trade Route Expansion',

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

    // others
    "default",
] as const;
export type GameModule = typeof GAME_MODULES[number];
