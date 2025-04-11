import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Notorious} from "./Notorious";
import {GameModule} from "../../../common/cards/GameModule";

export const HORIZONS_UPDATED_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.HORIZONS_UPDATE,
    commonCards: {
        [CardName.NOTORIOUS_NEW]: {Factory: Notorious},
    },
});
