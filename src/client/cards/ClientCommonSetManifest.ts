import {CommonSet, CommonSetName, getCommonSetName} from "../../server/commonSets/CommonSet";
import {ALL_COMMON_SET_MANIFEST} from "../../server/commonSets/AllCommonSets";
import {ClientCard} from "../../common/cards/ClientCard";
import {ClientCommonSet} from "./ClientCommonSet";

class ClientCommonSetManifest {
    public static commonSetNames: Array<Array<CommonSetName>> = [[], [], [], []];
    public static commonSets: Map<CommonSetName, ClientCommonSet> = new Map();

    public static initialize(): void {
        ALL_COMMON_SET_MANIFEST.forEach((c: CommonSet) => {
            const cc = new ClientCommonSet(c);
            this.commonSets.set(c.setName, cc);

            const idx: number = (c.includeHorizons ? 2 : 0) + (c.mixed ? 1 : 0);
            this.commonSetNames[idx].push(c.setName);
            if (!c.mixed) this.commonSetNames[idx + 1].push(c.setName);
        })
    }
}

export function allCommonSets(includeHorizons: boolean, mixed: boolean): Array<CommonSetName> {
    return ClientCommonSetManifest.commonSetNames[(includeHorizons ? 2 : 0) + (mixed ? 1 : 0)];
}

export function getCommonSet(name?: string): ClientCommonSet | undefined {
    const found: CommonSetName | undefined = getCommonSetName(name);
    return found !== undefined ? ClientCommonSetManifest.commonSets.get(found) : undefined;
}

export function getCommonSetCards(name?: string): Array<ClientCard> | undefined {
    const found: ClientCommonSet | undefined = getCommonSet(name);
    return found === undefined ? undefined : found.allCards;
}

ClientCommonSetManifest.initialize();
