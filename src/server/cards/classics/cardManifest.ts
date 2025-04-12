import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {Notorious} from "./Notorious";
import {GameModule} from "../../../common/cards/GameModule";
import {Praiseworthy} from "./Praiseworthy";
import {Great} from "./Great";
import {Marvellous} from "./Marvellous";
import {Glorious} from "./Glorious";
import {Triumphant} from "./Triumphant";
import {Triumphant1} from "./Triumphant1";
import {AweInspiring} from "./AweInspiring";

export const CLASSICS_COMMON_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.CLASSICS_COMMON,
    commonCards: {
        [CardName.PRAISEWORTHY]: {Factory: Praiseworthy},
        [CardName.GREAT]: {Factory: Great},
        [CardName.NOTORIOUS]: {Factory: Notorious},
        [CardName.MARVELLOUS]: {Factory: Marvellous},
        [CardName.GLORIOUS]: {Factory: Glorious},
        [CardName.TRIUMPHANT]: {Factory: Triumphant},
        [CardName.TRIUMPHANT1]: {Factory: Triumphant1},
        [CardName.AWE_INSPIRING]: {Factory:AweInspiring}
    }
});
