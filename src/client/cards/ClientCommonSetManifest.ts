import {CommonSet, CommonSetName, getCommonSetName} from "../../server/commonSets/CommonSet";
import {ALL_COMMON_SET_MANIFEST} from "../../server/commonSets/AllCommonSets";
import {ClientCard} from "../../common/cards/ClientCard";
import {ClientCommonSet} from "./ClientCommonSet";

class ClientCommonSetManifest {
    public static commonSetNames: Array<CommonSetName> = [];
    public static commonSets: Map<CommonSetName, ClientCommonSet> = new Map();

    public static initialize(): void {
        ALL_COMMON_SET_MANIFEST.forEach((c: CommonSet) => {
            this.commonSetNames.push(c.setName);
            this.commonSets.set(c.setName, new ClientCommonSet(c));
        })
    }
}

export function allCommonSets(): Array<CommonSetName> {
    return ClientCommonSetManifest.commonSetNames;
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
