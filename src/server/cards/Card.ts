import {CardName} from '../../common/cards/CardName';
import {CardSuitIcon} from "../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon";
import {CardStateSymbol} from "../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon";
import {CardStartingLocation} from '../../common/cards/CardStartingLocation';
import {VictoryPoints} from '../../common/cards/ClientCard';
import {Player} from '../Player';
import {CardNationColour} from '../../common/cards/CardNationColour';
import { CardInPlayType } from '../../common/cards/CardInPlayType';
import {CardExpansion} from "../../common/cards/CardExpansion";

export interface Properties {
    name: CardName;
    suit: Array<CardSuitIcon>;
    stateSymbol: Array<CardStateSymbol>;
    typeIcon: Array<CardTypeIcon>;
    headerIcon?: CardHeaderIcon;
    startingLocation?: CardStartingLocation;
    nationColour?: CardNationColour;
    cardInPlayType?: CardInPlayType;
    cardNumber?: string;
    effectText?: string;
    developmentCost?: string;
    expansion?: CardExpansion;
    playerCount?: number;
    victoryPoints?: VictoryPoints;
    victoryPointsString?: string;
}

export const staticCardProperties = new Map<CardName, Properties>();

export abstract class Card {
    private readonly properties: Properties;
    protected constructor(properties: Properties) {
        const staticInstance = staticCardProperties.get(properties.name);
        if (staticInstance === undefined) {
            staticCardProperties.set(properties.name, properties);
        }
        this.properties = properties;
    }
    public get name(): CardName {
        return this.properties.name;
    }
    public get suit(): Array<CardSuitIcon> {
        return this.properties.suit;
    }
    public get banner(): CardSuitIcon | undefined {
        return this.properties.suit.at(0);
    }
    public get stateSymbol(): Array<CardStateSymbol> {
        return this.properties.stateSymbol;
    }
    public get headerIcon(): CardHeaderIcon | undefined {
        return this.properties.headerIcon;
    }
    public get typeIcon(): Array<CardTypeIcon> {
        return this.properties.typeIcon;
    }
    public get nationColour(): CardNationColour | undefined {
        return this.properties.nationColour;
    }
    public get startingLocation(): CardStartingLocation | undefined {
        return this.properties.startingLocation;
    }
    public get victoryPoints(): VictoryPoints | undefined {
        return this.properties.victoryPoints;
    }
    public get cardInPlayType(): CardInPlayType | undefined {
        return this.properties.cardInPlayType;
    }
    public get cardNumber(): string | undefined {
        return this.properties.cardNumber;
    }
    public get effectText(): string | undefined {
        return this.properties.effectText;
    }
    public get developmentCost(): string | undefined {
        return this.properties.developmentCost;
    }
    public get expansion(): CardExpansion | undefined {
        return this.properties.expansion;
    }
    public get playerCount(): number | undefined {
        return this.properties.playerCount;
    }
    public get victoryPointsString(): string | undefined {
        return this.properties.victoryPointsString;
    }

    public canPlayAsAction(player: Player) {
        return player !== undefined;
    }

    public canFreePlay(player: Player) {
        return player !== undefined;
    }

    public play(player: Player) {
        return player !== undefined;
    }

    public getVictoryPoints(player?: Player): number{
        if (player === undefined) {
            throw new Error('Select a player to calculate victory points');
        }
        const vp1: VictoryPoints | undefined = this.properties.victoryPoints;
        if (vp1 === 'conditional' || vp1 === 'variable' || vp1 === 'negativeConditional' || vp1 === 'negativeVariable') {
            throw new Error('When victoryPoints is \'conditional\' or \'variable\', override getVictoryPoints');
        }
        if (vp1 === undefined) {
            return 0;
        }
        return vp1;
    }
}
