export enum CardNationColour {
    COMMON = "common",
    COMMON_B = "commonBlack",

    // classics nations
    CAR = "Carthaginians",
    CEL = "Celts",
    GRE = "Greeks",
    MAC = "Macedonians",
    PER = "Persians",
    ROM = "Romans",
    SCY = "Scythians",
    VIK = "Vikings",

    // legends nations
    ART = "Arthurians",
    ATL = "Atlanteans",
    EGY = "Egyptians",
    MAU = "Mauryans",
    MIN = "Minoans",
    OLM = "Olmecs",
    QIN = "Qin",
    UTO = "Utopians",

    // horizons nations
    ABB = "Abbasids",
    AKS = "Aksumites",
    CUL = "Cultists",
    GUP = "Guptas",
    INU = "Inuit",
    JPN = "Japanese",
    MAG = "Magyars",
    MAY = "Mayans",
    MRT = "Martians",
    POL = "Polynesians",
    SAS = "Sassanids",
    TAI = "Taino",
    TAN = "Tang",
    WAG = "Wagadou",
}

const isNationTextWhite: Set<CardNationColour> = new Set<CardNationColour>([
    CardNationColour.CAR,
    CardNationColour.CEL,
    CardNationColour.CUL,
    CardNationColour.GUP,
    CardNationColour.MAC,
    CardNationColour.MAG,
    CardNationColour.MRT,
    CardNationColour.MAU,
    CardNationColour.MIN,
    CardNationColour.OLM,
    CardNationColour.PER,
    CardNationColour.QIN,
    CardNationColour.ROM,
    CardNationColour.TAN,
    CardNationColour.UTO,
    CardNationColour.VIK,
    CardNationColour.COMMON
]);

export function getNationColourStyle(colour?: CardNationColour): string {
    return colour === undefined || colour === CardNationColour.COMMON || colour === CardNationColour.COMMON_B ? "" : `bg-card-nation-${colour}`;
}

export function getNationTextColour(colour?: CardNationColour): string {
    if (colour === undefined) return "black";
    return isNationTextWhite.has(colour) ? "white" : "black";
}
