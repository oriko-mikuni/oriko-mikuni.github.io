import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Notorious} from "./Notorious";
import {GameModule} from "../../../common/cards/GameModule";

export const CLASSICS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.CLASSICS_COMMON,
    commonCards: {
        [CardName.NOTORIOUS]: {Factory: Notorious}
    }
});
