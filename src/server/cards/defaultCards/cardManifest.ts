import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {DefaultCard} from "./DefaultCard";
import {GameModule} from "../../../common/cards/GameModule";

export const DEFAULT_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.DEFAULT,
    nationCards: {
    },
    commonCards: {
        [CardName.DEFAULT]: {Factory: DefaultCard},
    },
});
