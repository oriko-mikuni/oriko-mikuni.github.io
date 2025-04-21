import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {DefaultCard} from "./DefaultCard";

export const DEFAULT_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.DEFAULT,
    nationCards: {
    },
    commonCards: {
        [CardName.DEFAULT]: {Factory: DefaultCard},
    },
});
