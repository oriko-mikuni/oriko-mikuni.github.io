import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class BallGames extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BALL_GAMES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM15",
            effectText: [
                "Exhaust: discard 2 {mask} and spend an action to acquire {uncivilised}/{civilised}."
            ],
        });
    }
}
