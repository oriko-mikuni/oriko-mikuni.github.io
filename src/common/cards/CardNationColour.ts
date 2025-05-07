import React from "react";

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

    // TODO: fan-made nations
    // ISR = "Israelites",
    // LHN = "Late Han",
    // IBE = "Iberia"
}

const nationColourDisplayStyle: Record<CardNationColour, React.CSSProperties> = {
    [CardNationColour.ABB]: {color: "black", backgroundImage: `url("nation_colour/ABB.png")`},
    [CardNationColour.AKS]: {color: "black", backgroundImage: `url("nation_colour/AKS.png")`},
    [CardNationColour.ART]: {color: "black", backgroundColor: "#8dbe22"},
    [CardNationColour.ATL]: {color: "black", backgroundColor: "#64c7f3"},
    [CardNationColour.CAR]: {color: "white", backgroundColor: "#005da3"},
    [CardNationColour.CEL]: {color: "white", backgroundColor: "#00683a"},
    [CardNationColour.CUL]: {color: "white", backgroundImage: `url("nation_colour/CUL.png")`},
    [CardNationColour.EGY]: {color: "black", backgroundColor: "#ffee00"},
    [CardNationColour.GRE]: {color: "black", backgroundColor: "#ffffff"},
    [CardNationColour.GUP]: {color: "white", backgroundImage: `url("nation_colour/GUP.png")`},
    [CardNationColour.INU]: {color: "black", backgroundImage: `url("nation_colour/INU.png")`},
    [CardNationColour.JPN]: {color: "black", backgroundImage: `url("nation_colour/JPN.png")`},
    [CardNationColour.MAC]: {color: "white", backgroundColor: "#552b81"},
    [CardNationColour.MAG]: {color: "white", backgroundImage: `url("nation_colour/MAG.png")`},
    [CardNationColour.MRT]: {color: "white", backgroundImage: `url("nation_colour/MRT.png")`},
    [CardNationColour.MAU]: {color: "white", backgroundColor: "#9e622e"},
    [CardNationColour.MAY]: {color: "black", backgroundImage: `url("nation_colour/MAY.png")`},
    [CardNationColour.MIN]: {color: "white", backgroundColor: "#000000"},
    [CardNationColour.OLM]: {color: "white", backgroundColor: "#8e8e8d"},
    [CardNationColour.PER]: {color: "white", backgroundColor: "#a45396"},
    [CardNationColour.POL]: {color: "black", backgroundImage: `url("nation_colour/POL.png")`},
    [CardNationColour.QIN]: {color: "white", backgroundColor: "#ef82ac"},
    [CardNationColour.ROM]: {color: "white", backgroundColor: "#e30613"},
    [CardNationColour.SAS]: {color: "black", backgroundImage: `url("nation_colour/SAS.png")`},
    [CardNationColour.SCY]: {color: "black", backgroundColor: "#b7b867"},
    [CardNationColour.TAI]: {color: "black", backgroundImage: `url("nation_colour/TAI.png")`},
    [CardNationColour.TAN]: {color: "white", backgroundImage: `url("nation_colour/TAN.png")`},
    [CardNationColour.UTO]: {color: "white", backgroundColor: "#12b1ad"},
    [CardNationColour.VIK]: {color: "white", backgroundColor: "#f59e00"},
    [CardNationColour.WAG]: {color: "black", backgroundImage: `url("nation_colour/WAG.png")`},
    [CardNationColour.COMMON]: {color: "white"},
    [CardNationColour.COMMON_B]: {color: "black"}
}

export function getNationBackgroundStyle(colour?: CardNationColour): React.CSSProperties {
    if (colour === undefined) return {};
    return {
        backgroundColor: nationColourDisplayStyle[colour].backgroundColor,
        backgroundImage: nationColourDisplayStyle[colour].backgroundImage
    };
}

export function getNationTextColour(colour?: CardNationColour): string {
    if (colour === undefined) return "black";
    return nationColourDisplayStyle[colour].color ?? "black";
}
