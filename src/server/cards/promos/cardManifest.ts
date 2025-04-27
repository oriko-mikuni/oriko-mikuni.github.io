import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {Undaunted} from "./Undaunted";
import {Bountiful} from "./Bountiful";
import {HeirPresumptive} from "./HeirPresumptive";
import {Abundance1} from "./Abundance1";
import {Abundance2} from "./Abundance2";
import {Abundance3} from "./Abundance3";
import {Abundance4} from "./Abundance4";

export const PROMO_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.PROMO,
    commonCards: {
        [CardName.PROMO_UNDAUNTED]: {Factory: Undaunted},
        [CardName.PROMO_BOUNTIFUL]: {Factory: Bountiful},
        [CardName.PROMO_HEIR_PRESUMPTIVE]: {Factory: HeirPresumptive},
        [CardName.PROMO_ABUNDANCE1]: {Factory: Abundance1},
        [CardName.PROMO_ABUNDANCE2]: {Factory: Abundance2},
        [CardName.PROMO_ABUNDANCE3]: {Factory: Abundance3},
        [CardName.PROMO_ABUNDANCE4]: {Factory: Abundance4},
    },
});
