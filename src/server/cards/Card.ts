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

export interface Properties {
    name: CardName;
    suit: Array<CardSuitIcon>;
    headerIcon?: CardHeaderIcon;
    stateSymbol: Array<CardStateSymbol>;
    typeIcon: Array<CardTypeIcon>;
    startingLocation?: CardStartingLocation;
    victoryPoints?: VictoryPoints;
    nationColour?: CardNationColour;
    cardInPlayType: CardInPlayType;
}

export const staticCardProperties = new Map<CardName, Properties>();

export abstract class Card {
    private readonly properties: Properties;
    constructor(properties: Properties) {
        let staticInstance = staticCardProperties.get(properties.name);
        if (staticInstance === undefined) {
            staticCardProperties.set(properties.name, properties);
            staticInstance = properties;
        }
        this.properties = properties;
    }
    public get name() {
        return this.properties.name;
    }
    public get suit() {
        return this.properties.suit;
    }
    public get banner() {
        return this.properties.suit.at(0);
    }
    public get stateSymbol() {
        return this.stateSymbol;
    }
    public get headerIcon() {
        return this.properties.headerIcon;
    }
    public get typeIcon() {
        return this.properties.typeIcon;
    }
    public get nationColour() {
        return this.properties.nationColour;
    }
    public get startingLocation() {
        return this.properties.startingLocation;
    }
    public get victoryPoints(): VictoryPoints | undefined {
        return this.properties.victoryPoints;
    }
    public get cardInPlayType(): CardInPlayType {
        return this.properties.cardInPlayType;
    }

    public canPlayAsAction(player: Player) {
        return true;
    }

    public canFreePlay(player: Player) {
        return true;
    }

    public play(player: Player) {
        return undefined;
    }

    public getVictoryPoints(player?: Player): number{
        const vp1 = this.properties.victoryPoints;
        if (vp1 === 'conditional' || vp1 === 'variable') {
            throw new Error('When victoryPoints is \'conditional\' or \'variable\', override getVictoryPoints');
        }
        if (vp1 === undefined) {
            return 0;
        }
        if (typeof(vp1) === 'number') {
            return vp1;
        }
        return 0;
    }
}
