import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Magnificent} from "./Magnificent";
import {GameModule} from "../../../common/cards/GameModule";
import {Imperial} from "./Imperial";
import {Independent} from "./Independent";
import {Outstanding} from "./Outstanding";
import {Proud} from "./Proud";
import {Proud1} from "./Proud1";
import {Eminent} from "./Eminent";
import {Acclaimed} from "./Acclaimed";

export const LEGENDS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.LEGENDS_COMMON,
    commonCards: {
        [CardName.IMPERIAL]: {Factory: Imperial},
        [CardName.INDEPENDENT]: {Factory: Independent},
        [CardName.MAGNIFICENT]: {Factory: Magnificent},
        [CardName.OUTSTANDING]: {Factory: Outstanding},
        [CardName.PROUD]: {Factory: Proud},
        [CardName.PROUD1]: {Factory: Proud1},
        [CardName.EMINENT]: {Factory: Eminent},
        [CardName.ACCLAIMED]: {Factory: Acclaimed}
    }
});
