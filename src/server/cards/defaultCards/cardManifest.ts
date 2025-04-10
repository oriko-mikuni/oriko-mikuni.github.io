import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {DefaultCard} from "./DefaultCard";

export const DEFAULT_CARD_MANIFEST = new ModuleManifest({
    module: 'default',
    nationCards: {
    },
    commonCards: {
        [CardName.DEFAULT]: {Factory: DefaultCard},
    },
});
