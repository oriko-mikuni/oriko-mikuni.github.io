import { CardName } from "../../../common/cards/CardName";
import { ModuleManifest } from "../ModuleManifest";
import {Notorious} from "./Notorious";

export const CLASSICS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: 'Classics Common',
    commonCards: {
        [CardName.NOTORIOUS]: {Factory: Notorious}
    }
});
