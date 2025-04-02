import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Notorious} from "./Notorious";

export const HORIZONS_UPDATED_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: 'Horizons Updated Commons',
    commonCards: {
        [CardName.NOTORIOUS_NEW]: {Factory: Notorious},
    },
});
