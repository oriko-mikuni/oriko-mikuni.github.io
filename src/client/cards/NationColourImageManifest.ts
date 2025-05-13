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

export function getNationColourFile(colour?: CardNationColour): Blob | null {
    if (colour === undefined) return null;
    return NationColourImageManifest.nationColourFile[colour] ?? null;
}

NationColourImageManifest.initialize();
