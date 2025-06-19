import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {Player} from "../../../Player";

import {CardLocation} from "../../../../common/cards/CardLocation";

export class Travellers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRAVELLERS,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3UNC21",
            effectText: [
                "Add 1{population} to a card in the market.",
                "All players MAY put a card from their discard pile into their history.",
                "Gain 1{progress} per player who did."
            ],
            playerCount: 3,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}/{tributary} in your history"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const historyCard = param.player.selectCards(card =>
            card.location === CardLocation.HISTORY);
        return Player.countSuit(CardSuitIcon.REGION, historyCard) +
            Player.countSuit(CardSuitIcon.TRIBUTARY, historyCard);
    }
}
