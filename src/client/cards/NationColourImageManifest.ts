import {CardNationColour} from "../../common/cards/CardNationColour";

const nationColourFileName: Partial<Record<CardNationColour, string>> = {
    [CardNationColour.ABB]: "/nation_colour/ABB.png",
    [CardNationColour.AKS]: "/nation_colour/AKS.png",
    [CardNationColour.CUL]: "/nation_colour/CUL.png",
    [CardNationColour.GUP]: "/nation_colour/GUP.png",
    [CardNationColour.INU]: "/nation_colour/INU.png",
    [CardNationColour.JPN]: "/nation_colour/JPN.png",
    [CardNationColour.MAG]: "/nation_colour/MAG.png",
    [CardNationColour.MRT]: "/nation_colour/MRT.png",
    [CardNationColour.MAY]: "/nation_colour/MAY.png",
    [CardNationColour.POL]: "/nation_colour/POL.png",
    [CardNationColour.SAS]: "/nation_colour/SAS.png",
    [CardNationColour.TAI]: "/nation_colour/TAI.png",
    [CardNationColour.TAN]: "/nation_colour/TAN.png",
    [CardNationColour.WAG]: "/nation_colour/WAG.png",
}

const nationBgColour: Partial<Record<CardNationColour, string>> = {
    [CardNationColour.ART]: "#8dbe22",
    [CardNationColour.ATL]: "#64c7f3",
    [CardNationColour.CAR]: "#005da3",
    [CardNationColour.CEL]: "#00683a",
    [CardNationColour.EGY]: "#ffee00",
    [CardNationColour.GRE]: "#ffffff",
    [CardNationColour.MAC]: "#552b81",
    [CardNationColour.MAU]: "#9e622e",
    [CardNationColour.MIN]: "#000000",
    [CardNationColour.OLM]: "#8e8e8d",
    [CardNationColour.PER]: "#a45396",
    [CardNationColour.QIN]: "#ef82ac",
    [CardNationColour.ROM]: "#e30613",
    [CardNationColour.SCY]: "#b7b867",
    [CardNationColour.UTO]: "#12b1ad",
    [CardNationColour.VIK]: "#f59e00",
};

class NationColourImageManifest {
    public static nationColourFile: Partial<Record<CardNationColour, Blob>> = {};
    public static initialize(): void {
        for (const colour of Object.values(CardNationColour)) {
            const imagePath: string | undefined = nationColourFileName[colour];
            if (!imagePath) continue;
            fetch(imagePath)
                .then((res: Response): Promise<Blob> => {
                    if (!res.ok) {
                        throw new Error("Could not find image file");
                    }
                    return res.blob();
                })
                .then((blob: Blob): void => {
                    NationColourImageManifest.nationColourFile[colour] = blob;
                })
                .catch(err => console.error("fetch error: " + err));
        }
    }
}

export function getNationBgColourFile(colour?: CardNationColour): Blob | null {
    if (colour === undefined) return null;
    return NationColourImageManifest.nationColourFile[colour] ?? null;
}


export function getNationBgColour(colour?: CardNationColour): string {
    if (colour === undefined) return "transparent";
    return nationBgColour[colour] ?? "transparent";
}

NationColourImageManifest.initialize();
