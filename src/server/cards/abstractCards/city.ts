import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardStateSymbol } from "../../../common/cards/CardStateSymbol";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { CardTypeIcon } from "../../../common/cards/CardTypeIcon";
import { Player } from "../../Player";
import { Card } from "../Card";
import { ICard, ISolsticeCard } from "../ICard";

export abstract class AbstractCity extends Card implements ICard, ISolsticeCard {
    constructor(
        name,
        suit: Array<CardSuitIcon> = [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
        startingLocation: CardStartingLocation | undefined = undefined,
        nationColour: CardNationColour | undefined = undefined,
        stateSymbol: Array<CardStateSymbol> = []
    ) {
        super({
            name: name,
            suit: suit,
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: stateSymbol,
            typeIcon: [CardTypeIcon.CITY],
            startingLocation: startingLocation,
            nationColour: nationColour,
        });
    }

    public solstice(player: Player) {
        // TODO: city effect
        return undefined;
    }
}