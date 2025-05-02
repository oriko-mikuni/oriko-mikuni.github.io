import {CardNationColour} from "./CardNationColour";

export enum GameModule  {
    COMMON = 'module.1.common',
    CLASSICS_COMMON = 'module.2.common-Classics',
    LEGENDS_COMMON = 'module.3.common-Legends',
    HORIZONS_COMMON = 'module.4.common-Horizons',
    TRADE_ROUTE_EXPANSION = 'module.5.common-Trade-Route',

    HORIZONS_UPDATE = 'module.update-Horizons',
    PROMO = 'module.promo',

    // classics nations
    CARTHAGINIANS = "module.nation-Carthaginians",
    CELTS = "module.nation-Celts",
    GREEKS = "module.nation-Greeks",
    MACEDONIANS = "module.nation-Macedonians",
    PERSIANS = "module.nation-Persians",
    ROMANS = "module.nation-Romans",
    SCYTHIANS = "module.nation-Scythians",
    VIKINGS = "module.nation-Vikings",

    // legends nations
    ARTHURIANS = "module.nation-Arthurians",
    ATLANTEANS = "module.nation-Atlanteans",
    EGYPTIANS = "module.nation-Egyptians",
    MAURYANS = "module.nation-Mauryans",
    MINOANS = "module.nation-Minoans",
    OLMECS = "module.nation-Olmecs",
    QIN = "module.nation-Qin",
    UTOPIANS = "module.nation-Utopians",

    // horizons nations
    ABBASIDS = "module.nation-Abbasids",
    AKSUMITES = "module.nation-Aksumites",
    CULTISTS = "module.nation-Cultists",
    GUPTAS = "module.nation-Guptas",
    INUIT = "module.nation-Inuit",
    JAPANESE = "module.nation-Japanese",
    MAGYARS = "module.nation-Magyars",
    MAYANS = "module.nation-Mayans",
    MARTIANS = "module.nation-Martians",
    POLYNESIANS = "module.nation-Polynesians",
    SASSANIDS = "module.nation-Sassanids",
    TAINO = "module.nation-Taino",
    TANG = "module.nation-Tang",
    WAGADOU = "module.nation-Wagadou",

    // others
    DEFAULT = "module.default",
}

export const moduleNation: Record<GameModule, CardNationColour> = {
    [GameModule.DEFAULT]: CardNationColour.COMMON,

    [GameModule.COMMON]: CardNationColour.COMMON,
    [GameModule.CLASSICS_COMMON]: CardNationColour.COMMON,
    [GameModule.LEGENDS_COMMON]: CardNationColour.COMMON,
    [GameModule.HORIZONS_COMMON]: CardNationColour.COMMON,
    [GameModule.TRADE_ROUTE_EXPANSION]: CardNationColour.COMMON,

    [GameModule.PROMO]: CardNationColour.COMMON,
    [GameModule.HORIZONS_UPDATE]: CardNationColour.COMMON,

    [GameModule.ABBASIDS]: CardNationColour.ABB,
    [GameModule.AKSUMITES]: CardNationColour.AKS,
    [GameModule.ARTHURIANS]: CardNationColour.ART,
    [GameModule.ATLANTEANS]: CardNationColour.ATL,
    [GameModule.CARTHAGINIANS]: CardNationColour.CAR,
    [GameModule.CELTS]: CardNationColour.CEL,
    [GameModule.CULTISTS]: CardNationColour.CUL,
    [GameModule.EGYPTIANS]: CardNationColour.EGY,
    [GameModule.GREEKS]: CardNationColour.GRE,
    [GameModule.GUPTAS]: CardNationColour.GUP,
    [GameModule.INUIT]: CardNationColour.INU,
    [GameModule.JAPANESE]: CardNationColour.JPN,
    [GameModule.MACEDONIANS]: CardNationColour.MAC,
    [GameModule.MAGYARS]: CardNationColour.MAG,
    [GameModule.MARTIANS]: CardNationColour.MRT,
    [GameModule.MAURYANS]: CardNationColour.MAU,
    [GameModule.MAYANS]: CardNationColour.MAY,
    [GameModule.MINOANS]: CardNationColour.MIN,
    [GameModule.OLMECS]: CardNationColour.OLM,
    [GameModule.PERSIANS]: CardNationColour.PER,
    [GameModule.POLYNESIANS]: CardNationColour.POL,
    [GameModule.QIN]: CardNationColour.QIN,
    [GameModule.ROMANS]: CardNationColour.ROM,
    [GameModule.SASSANIDS]: CardNationColour.SAS,
    [GameModule.SCYTHIANS]: CardNationColour.SCY,
    [GameModule.TAINO]: CardNationColour.TAI,
    [GameModule.TANG]: CardNationColour.TAN,
    [GameModule.UTOPIANS]: CardNationColour.UTO,
    [GameModule.VIKINGS]: CardNationColour.VIK,
    [GameModule.WAGADOU]: CardNationColour.WAG
};
