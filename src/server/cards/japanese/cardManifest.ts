import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {JapanesePowerA} from "./JapanesePowerA";
import {JapanesePowerB} from "./JapanesePowerB";
import {EmperorKanmu} from "./EmperorKanmu";
import {HeianKyoKyoto} from "./HeianKyoKyoto";
import {JinguJiShrineTemple} from "./JinguJiShrineTemple";
import {TeaCeremony} from "./TeaCeremony";
import {Miyabi} from "./Miyabi";
import {Shogun} from "./Shogun";
import {Unrest} from "./Unrest";
import {Kanji} from "./Kanji";
import {TendaiBuddhism} from "./TendaiBuddhism";
import {Prosperity} from "./Prosperity";
import {KantoPlain} from "./KantoPlain";
import {MannoReservoir} from "./MannoReservoir";
import {Nara} from "./Nara";
import {AppealToChina} from "./AppealToChina";
import {Kansai} from "./Kansai";
import {Kyushu} from "./Kyushu";
import {Shinto} from "./Shinto";
import {Clans} from "./Clans";
import {Advance} from "./Advance";
import {Glory} from "./Glory";
import {PrinceShotokuTaishi} from "./PrinceShotokuTaishi";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";

export const JPN_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.JAPANESE,
    nationCards: {
        [CardName.JAPANESE_POWER_A]: {Factory: JapanesePowerA},
        [CardName.JAPANESE_POWER_B]: {Factory: JapanesePowerB},
        [CardName.EMPEROR_KANMU]: {Factory: EmperorKanmu},
        [CardName.HEIAN_KYO_KYOTO]: {Factory: HeianKyoKyoto},
        [CardName.JINGU_JI_SHRINE_TEMPLE]: {Factory: JinguJiShrineTemple},
        [CardName.TEA_CEREMONY]: {Factory: TeaCeremony},
        [CardName.MIYABI]: {Factory: Miyabi},
        [CardName.SHOGUN]: {Factory: Shogun},
        [CardName.UNREST_JPN_NATION]: {Factory: Unrest},
        [CardName.KANJI]: {Factory: Kanji},
        [CardName.TENDAI_BUDDHISM]: {Factory: TendaiBuddhism},
        [CardName.PROSPERITY_JPN]: {Factory: Prosperity},
        [CardName.KANTO_PLAIN]: {Factory: KantoPlain},
        [CardName.MANNO_RESERVOIR]: {Factory: MannoReservoir},
        [CardName.NARA]: {Factory: Nara},
        [CardName.APPEAL_TO_CHINA]: {Factory: AppealToChina},
        [CardName.KANSAI]: {Factory: Kansai},
        [CardName.KYUSHU]: {Factory: Kyushu},
        [CardName.SHINTO]: {Factory: Shinto},
        [CardName.CLANS]: {Factory: Clans},
        [CardName.ADVANCE_JPN]: {Factory: Advance},
        [CardName.GLORY_JPN]: {Factory: Glory},
        [CardName.PRINCE_SHOTOKU_TAISHI]: {Factory: PrinceShotokuTaishi},
        [CardName.UNREST_JPN]: {Factory: Unrest1},
        [CardName.UNREST_JPN1]: {Factory: Unrest2},
    },
});
