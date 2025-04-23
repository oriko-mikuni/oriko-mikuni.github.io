import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {Player} from "../../../Player";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class AdvancedCulture extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCED_CULTURE_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL2X",
            effectText: [
                "Pay 2{material} to acquire a {uncivilised}/{civilised}/{trade-route}."
            ],
            developmentCost: {progress: 1, material: 5},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {region} except {ocean}",
            gameModule: GameModule.ATLANTEANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(
            Player.countSuit(CardSuitIcon.REGION,
                param.player.selectCards(card =>
                    card.card.typeIcon.every(type => type !== CardTypeIcon.OCEAN)
                )
            ) / 2
        );
    }
}
