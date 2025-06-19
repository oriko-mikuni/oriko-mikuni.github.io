import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {LocatedCard} from "../../../Player";
import {isInPlayLocation} from "../../../../common/cards/CardLocation";

export class Determined extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DETERMINED,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            cardNumber: "3FAM4",
            effectText: [
                "Break through for a {region}/{tributary}.",
                "You MAY garrison a card in a {region} with no other garrisoned cards to trigger that card's play effect."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per garrisoned card in {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const inPlayRegions: Array<LocatedCard> = param.player.selectCards(card =>
            isInPlayLocation(card.location) &&
            card.card.suit.some(suit => suit === CardSuitIcon.REGION)
        );
        return inPlayRegions.reduce(
            (count: number, cardInPlay: LocatedCard): number =>
                count + param.player.selectCards(card => card.location === cardInPlay.card.name).length
        , 0);
    }
}
