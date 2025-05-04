import {CardName} from "../../../common/cards/CardName";
import {ModuleManifest} from "../ModuleManifest";
import {GameModule} from "../../../common/cards/GameModule";
import {MartiansPowerA} from "./MartiansPowerA";
import {MartiansPowerB} from "./MartiansPowerB";
import {ReactorExplosion} from "./ReactorExplosion";
import {PermanentSettlement} from "./PermanentSettlement";
import {RitualsOfEarthlings} from "./RitualsOfEarthlings";
import {AlienOverlord} from "./AlienOverlord";
import {MapsOfNibiru} from "./MapsOfNibiru";
import {Teleportation} from "./Teleportation";
import {FractureOfTime} from "./FractureOfTime";
import {EcoBubble} from "./EcoBubble";
import {ChariotOfTheGods} from "./ChariotOfTheGods";
import {ResurrectionStone} from "./ResurrectionStone";
import {CrystalSkull} from "./CrystalSkull";
import {Unrest} from "./Unrest";
import {CloningVats} from "./CloningVats";
import {TakeMeToYourLeader} from "./TakeMeToYourLeader";
import {FlyingDrone} from "./FlyingDrone";
import {SharingOurSecrets} from "./SharingOurSecrets";
import {AncientAstronauts} from "./AncientAstronauts";
import {SignalsToSpace} from "./SignalsToSpace";
import {GloriousUplifting} from "./GloriousUplifting";
import {SwordOfPower} from "./SwordOfPower";
import {OannesTheSage} from "./OannesTheSage";
import {Cryostasis} from "./Cryostasis";
import {LandingSite} from "./LandingSite";
import {Thoats} from "./Thoats";
import {Unrest1} from "./Unrest1";
import {Unrest2} from "./Unrest2";
import {Unrest3} from "./Unrest3";
import {Alien} from "./Alien";
import {GoneNative} from "./GoneNative";

export const MRT_CARD_MANIFEST = new ModuleManifest({
    module: GameModule.MARTIANS,
    nationCards: {
        [CardName.MARTIANS_POWER_A]: {Factory: MartiansPowerA},
        [CardName.MARTIANS_POWER_B]: {Factory: MartiansPowerB},
        [CardName.REACTOR_EXPLOSION]: {Factory: ReactorExplosion},
        [CardName.PERMANENT_SETTLEMENT]: {Factory: PermanentSettlement},
        [CardName.RITUALS_OF_EARTHLINGS]: {Factory: RitualsOfEarthlings},
        [CardName.ALIEN_OVERLORD]: {Factory: AlienOverlord},
        [CardName.MAPS_OF_NIBIRU]: {Factory: MapsOfNibiru},
        [CardName.TELEPORTATION]: {Factory: Teleportation},
        [CardName.FRACTURE_OF_TIME]: {Factory: FractureOfTime},
        [CardName.ECO_BUBBLE]: {Factory: EcoBubble},
        [CardName.CHARIOT_OF_THE_GODS]: {Factory: ChariotOfTheGods},
        [CardName.RESURRECTION_STONE]: {Factory: ResurrectionStone},
        [CardName.CRYSTAL_SKULL]: {Factory: CrystalSkull},
        [CardName.UNREST_MRT_NATION]: {Factory: Unrest},
        [CardName.CLONING_VATS]: {Factory: CloningVats},
        [CardName.TAKE_ME_TO_YOUR_LEADER]: {Factory: TakeMeToYourLeader},
        [CardName.FLYING_DRONE]: {Factory: FlyingDrone},
        [CardName.SHARING_OUR_SECRETS]: {Factory: SharingOurSecrets},
        [CardName.ANCIENT_ASTRONAUTS]: {Factory: AncientAstronauts},
        [CardName.SIGNALS_TO_SPACE]: {Factory: SignalsToSpace},
        [CardName.GLORIOUS_UPLIFTING]: {Factory: GloriousUplifting},
        [CardName.SWORD_OF_POWER]: {Factory: SwordOfPower},
        [CardName.OANNES_THE_SAGE]: {Factory: OannesTheSage},
        [CardName.CRYOSTASIS]: {Factory: Cryostasis},
        [CardName.LANDING_SITE]: {Factory: LandingSite},
        [CardName.THOATS]: {Factory: Thoats},
        [CardName.UNREST_MRT]: {Factory: Unrest1},
        [CardName.UNREST_MRT_SUPPLY]: {Factory: Unrest2},
        [CardName.UNREST_MRT_SUPPLY1]: {Factory: Unrest3},
        [CardName.ALIEN]: {Factory: Alien},
        [CardName.GONE_NATIVE]: {Factory: GoneNative},
    },
});
