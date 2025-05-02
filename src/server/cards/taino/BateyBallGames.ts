import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class BateyBallGames extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BATEY_BALL_GAMES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI15",
            effectText: [
                "Exhaust: spend 1 action and place a card on the top of your deck to acquire a {uncivilised}/{civilised}."
            ],
        });
    }
}
