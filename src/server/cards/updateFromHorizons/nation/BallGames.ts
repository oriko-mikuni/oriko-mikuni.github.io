import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class BallGames extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BALL_GAMES_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM15X",
            effectText: [
                "(illustration changed for historical accuracy)",
                "Exhaust: discard 2 {mask} and spend 1 action to acquire a {uncivilised}/{civilised}."
            ],
            gameModule: GameModule.OLMECS
        });
    }
}
