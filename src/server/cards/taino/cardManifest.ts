import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {TainoPowerA} from "./TainoPowerA";
import {TainoPowerB} from "./TainoPowerB";
import {AyitiHispaniola} from "./AyitiHispaniola";
import {Enriquillo} from "./Enriquillo";
import {BorinquenPuertoRico} from "./BorinquenPuertoRico";
import {CaribbeanSea} from "./CaribbeanSea";
import {GiftExchange} from "./GiftExchange";
import {Cuba} from "./Cuba";
import {Migration} from "./Migration";
import {SolDeJayuya} from "./SolDeJayuya";
import {GuanahaniSanSalvador} from "./GuanahaniSanSalvador";
import {Unrest} from "./Unrest";
import {Caribs} from "./Caribs";
import {SoilRotation} from "./SoilRotation";
import {OrinocoValley} from "./OrinocoValley";
import {BateyBallGames} from "./BateyBallGames";
import {Petroglyphs} from "./Petroglyphs";
import {Bohio} from "./Bohio";
import {Cacique} from "./Cacique";
import {Canoes} from "./Canoes";
import {Fishing} from "./Fishing";
import {Zemi} from "./Zemi";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {FreeTribes} from "./FreeTribes";
import {FreeTribesF} from "./FreeTribesF";

export const TAI_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.TAINO,
    nationCards: {
        [CardName.TAINO_POWER_A]: {Factory: TainoPowerA},
        [CardName.TAINO_POWER_B]: {Factory: TainoPowerB},
        [CardName.AYITI_HISPANIOLA]: {Factory: AyitiHispaniola},
        [CardName.ENRIQUILLO]: {Factory: Enriquillo},
        [CardName.BORINQUEN_PUERTO_RICO]: {Factory: BorinquenPuertoRico},
        [CardName.CARIBBEAN_SEA]: {Factory: CaribbeanSea},
        [CardName.GIFT_EXCHANGE]: {Factory: GiftExchange},
        [CardName.CUBA]: {Factory: Cuba},
        [CardName.MIGRATION]: {Factory: Migration},
        [CardName.SOL_DE_JAYUYA]: {Factory: SolDeJayuya},
        [CardName.GUANAHANI_SAN_SALVADOR]: {Factory: GuanahaniSanSalvador},
        [CardName.UNREST_TAI_NATION]: {Factory: Unrest},
        [CardName.CARIBS]: {Factory: Caribs},
        [CardName.SOIL_ROTATION]: {Factory: SoilRotation},
        [CardName.ORINOCO_VALLEY]: {Factory: OrinocoValley},
        [CardName.BATEY_BALL_GAMES]: {Factory: BateyBallGames},
        [CardName.PETROGLYPHS]: {Factory: Petroglyphs},
        [CardName.BOHIO]: {Factory: Bohio},
        [CardName.CACIQUE]: {Factory: Cacique},
        [CardName.CANOES]: {Factory: Canoes},
        [CardName.FISHING]: {Factory: Fishing},
        [CardName.ZEMI]: {Factory: Zemi},
        [CardName.UNREST_TAI]: {Factory: Unrest1},
        [CardName.UNREST_TAI1]: {Factory: Unrest2},
        [CardName.FREE_TRIBES]: {Factory: FreeTribes},
        [CardName.FREE_TRIBES_F]: {Factory: FreeTribesF},
    },
});
