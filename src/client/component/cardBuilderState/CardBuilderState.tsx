import {ClientCard} from "../../../common/cards/ClientCard.ts";
import {GameModule} from "../../../common/cards/GameModule.ts";
import {CardExpansion} from "../../../common/cards/CardExpansion.ts";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import {Units} from "../../../common/Units.ts";
import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import InputTextBox from "../common/InputTextBox.tsx";
import ButtonGroup from "../common/ButtonGroup.tsx";
import CardSuitIconDisplay from "../card/CardSuitIconDisplay.tsx";
import CardTypeIconDisplay from "../card/CardTypeIconDisplay.tsx";
import CardStateIconDisplay from "../card/CardStateIconDisplay.tsx";
import CardHeaderIconDisplay from "../card/CardHeaderIconDisplay.tsx";
import CardRenderIconComponents from "../card/CardRenderIconComponents.tsx";
import InputNumber from "../common/InputNumber.tsx";
import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import CardNationColourRender, {CardNationColourDisplayShape} from "../card/CardNationColourRender.tsx";
import CardExpansionRender from "../card/CardExpansionRender.tsx";
import CardVictoryPointIcon from "../card/CardVictoryPointIcon.tsx";
import {useTranslation} from "react-i18next";
import CardTextRender from "../card/CardTextRender.tsx";

enum VictoryPointType {
    number = 'number',
    conditional = 'conditional',
    variable = 'variable',
    negativeConditional = 'negativeConditional'
}

export type CardBuilderStateProps = {
    cardNumber: string;
    developmentCostProgress: number;
    developmentCostGoods: number;
    developmentCostMaterial: number;
    developmentCostPopulation: number;
    developmentCostString: string;
    effectText: string;
    expansion: CardExpansion;
    headerIcon: CardHeaderIcon;
    name: string;
    nationColour: CardNationColour;
    nationColourFile: File | 'none';
    playerCount: number;
    startingLocation: CardStartingLocation;
    stateIcon: Array<CardStateIcon>;
    suit: Array<CardSuitIcon>;
    typeIcon: Array<CardTypeIcon>;
    victoryPointType: VictoryPointType;
    victoryPoints: number;
    victoryPointsString: string;
    illustration: string;
    exhaustCount: number;
    isStartingLocationBlack: boolean;
}

function isDevelopmentCostEmpty(props: CardBuilderStateProps): boolean {
    return props.developmentCostProgress === 0
        && props.developmentCostGoods === 0
        && props.developmentCostMaterial === 0
        && props.developmentCostPopulation === 0;
}

function developmentCostUnits(props: CardBuilderStateProps): Units {
    return {
        goods: props.developmentCostGoods,
        material: props.developmentCostMaterial,
        population: props.developmentCostPopulation,
        progress: props.developmentCostProgress,
    }
}

const CardBuilderStatePropsDefault: CardBuilderStateProps = {
    cardNumber: "",
    developmentCostProgress: 0,
    developmentCostGoods: 0,
    developmentCostMaterial: 0,
    developmentCostPopulation: 0,
    developmentCostString: "",
    effectText: "",
    expansion: CardExpansion.NONE,
    headerIcon: CardHeaderIcon.NO_HEADER,
    name: "",
    nationColour: CardNationColour.COMMON,
    nationColourFile: 'none',
    playerCount: 0,
    startingLocation: CardStartingLocation.DEFAULT,
    stateIcon: [],
    suit: [],
    typeIcon: [],
    victoryPointType: VictoryPointType.number,
    victoryPoints: 0,
    victoryPointsString: "",
    illustration: "",
    exhaustCount: 5,
    isStartingLocationBlack: false,
}

export function ofCardBuilderStateProps(props: Partial<CardBuilderStateProps>): CardBuilderStateProps {
    return {...CardBuilderStatePropsDefault, ...props};
}

export class CardBuilderState {
    props: CardBuilderStateProps;

    constructor(props: Partial<CardBuilderStateProps>) {
        this.props = ofCardBuilderStateProps(props);
    }

    public static reducer(state: CardBuilderState, action: Partial<CardBuilderStateProps>): CardBuilderState {
        const resultProps: Partial<CardBuilderStateProps> = {...state.props, ...action};
        return new CardBuilderState(resultProps);
    }

    public getCardDisplay(): ClientCard {
        const nationColour: CardNationColour =
            (this.props.nationColour === CardNationColour.COMMON || this.props.nationColour === CardNationColour.COMMON_B)
                ? (this.props.isStartingLocationBlack ? CardNationColour.COMMON_B : CardNationColour.COMMON)
                : this.props.nationColour;
        return {
            cardNumber: this.props.cardNumber !== "" ? this.props.cardNumber + "(FAN)" : "FAN",
            developmentCost: isDevelopmentCostEmpty(this.props) ? undefined : developmentCostUnits(this.props),
            developmentCostString: this.props.developmentCostString !== "" ? [this.props.developmentCostString] : [],
            effectText: this.props.effectText !== "" ? [this.props.effectText] : [],
            expansion: this.props.expansion,
            gameModule: GameModule.DEFAULT,
            headerIcon: this.props.headerIcon,
            keywords: [],
            relatedCards: [],
            name: this.props.name !== "" ? this.props.name : "-",
            nationColour: nationColour,
            nationColourFile: this.props.nationColourFile === 'none' ? undefined : this.props.nationColourFile,
            playerCount: this.props.playerCount,
            startingLocation: this.props.startingLocation,
            stateSymbol: this.props.stateIcon,
            suit: this.props.suit,
            typeIcon: this.props.typeIcon,
            victoryPoints: this.props.victoryPointType !== VictoryPointType.number ? this.props.victoryPointType : this.props.victoryPoints,
            victoryPointsString: this.props.victoryPointsString !== "" ? this.props.victoryPointsString : undefined,
            illustration: this.props.illustration || undefined,
            exhaustCount: (this.props.suit.at(0) !== CardSuitIcon.POWER || this.props.exhaustCount === 5) ? undefined : this.props.exhaustCount
        };
    }

    public getOperations(dispatch: (action: Partial<CardBuilderStateProps>) => void): React.JSX.Element {
        const {t: cardMakerTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCardMaker"});
        const customNationColorInput: React.JSX.Element = <input id="customNationColourInput" type="file" onChange={e => {
            if (e.target.files) {
                const file: File = e.target.files[0];
                if (file) dispatch({nationColourFile: file, nationColour: CardNationColour.COMMON})
            }
        }}/>;
        const illustrationInput: React.JSX.Element  = <input id="illustrationInput" type="file" onChange={e => {
            if (e.target.files) {
                const file: File = e.target.files[0];
                if (file) {
                    const fileURL: string = URL.createObjectURL(file);
                    dispatch({illustration: fileURL})
                }
            }
        }}/>;
        const specialExhaustInput: React.JSX.Element | null =
            this.props.suit.length === 0 || this.props.suit[0] !== CardSuitIcon.POWER
                ? <span><CardTextRender text={cardMakerTranslation("Exhaust Count Settings Unavailable")}></CardTextRender></span>
                : <span>
                    {cardMakerTranslation("Exhaust Count")}
                    <InputNumber value={this.props.exhaustCount} onChange={num => dispatch({exhaustCount: num < 1 ? 1 : num})}/>
                    {cardMakerTranslation("Default Exhaust Count Is Five")}
                </span>;
        const customStartingLocationColorButtons: React.JSX.Element | null =
            (this.props.nationColourFile === 'none'
                && this.props.nationColour !== CardNationColour.COMMON
                && this.props.nationColour !== CardNationColour.COMMON_B) ? null :
                <span>
                    {cardMakerTranslation("Starting Location Colour")}
                    <button onClick={() => dispatch({isStartingLocationBlack: true})}>{cardMakerTranslation("black")}</button>
                    <button onClick={() => dispatch({isStartingLocationBlack: false})}>{cardMakerTranslation("white")}</button>
                </span>;
        return <>
            {cardMakerTranslation("Name")}
            <InputTextBox value={this.props.name} onChange={text => dispatch({name: text})}/><br/>
            {cardMakerTranslation("Card Number")}
            <InputTextBox value={this.props.cardNumber} onChange={text => dispatch({cardNumber: text})}/><br/>
            {cardMakerTranslation("Suit Icon")}
            <ButtonGroup
                range={Object.values(CardSuitIcon)}
                ItemRender={arg0 => <CardSuitIconDisplay suit={arg0.arg0} position="inline"/>}
                onClick={suit => {
                    dispatch(suit !== undefined ? {suit: [...this.props.suit, suit]} : {})
                }}
            />
            <button onClick={() => dispatch({suit: []})}>{cardMakerTranslation("clear")}</button>
            <br/>
            {specialExhaustInput}
            <br/>
            {cardMakerTranslation("Type Icon")}
            <ButtonGroup
                range={Object.values(CardTypeIcon)}
                ItemRender={arg0 => <CardTypeIconDisplay type={arg0.arg0} position="inline"/>}
                onClick={type => {
                    dispatch(type !== undefined ? {typeIcon: [...this.props.typeIcon, type]} : {})
                }}
            />
            <button onClick={() => dispatch({typeIcon: []})}>{cardMakerTranslation("clear")}</button>
            <br/>
            {cardMakerTranslation("State Icon")}
            <ButtonGroup
                range={Object.values(CardStateIcon)}
                ItemRender={arg0 => <CardStateIconDisplay state={arg0.arg0}/>}
                onClick={state => {
                    dispatch(state !== undefined ? {stateIcon: [...this.props.stateIcon, state]} : {})
                }}
            />
            <button onClick={() => dispatch({stateIcon: []})}>{cardMakerTranslation("clear")}</button>
            <br/>
            {cardMakerTranslation("Header Icon")}
            <ButtonGroup
                range={Object.values(CardHeaderIcon)}
                ItemRender={arg0 => <CardHeaderIconDisplay headerIcon={arg0.arg0}/>}
                onClick={header => {
                    dispatch({headerIcon: header})
                }}
            /><br/>
            {cardMakerTranslation("Effect Text")}
            <InputTextBox value={this.props.effectText} onChange={text => dispatch({effectText: text})} allowBr={true}/><br/>
            {cardMakerTranslation("Development Cost")}
            <CardRenderIconComponents iconName="resource-progress"/>
            <InputNumber value={this.props.developmentCostProgress}
                         onChange={num => dispatch({developmentCostProgress: num})}/>
            <CardRenderIconComponents iconName="resource-material"/>
            <InputNumber value={this.props.developmentCostMaterial}
                         onChange={num => dispatch({developmentCostMaterial: num})}/>
            <CardRenderIconComponents iconName="resource-population"/>
            <InputNumber value={this.props.developmentCostPopulation}
                         onChange={num => dispatch({developmentCostPopulation: num})}/>
            <CardRenderIconComponents iconName="resource-goods"/>
            <InputNumber value={this.props.developmentCostGoods}
                         onChange={num => dispatch({developmentCostGoods: num})}/>
            <br/>
            {cardMakerTranslation("Development Cost Text")}
            <InputTextBox value={this.props.developmentCostString}
                          onChange={text => dispatch({developmentCostString: text})} allowBr={true}/><br/>
            {cardMakerTranslation("Nation Colour")}
            <ButtonGroup range={Object.values(CardNationColour)} ItemRender={arg0 => {
                if (arg0.arg0 === CardNationColour.COMMON_B) return null;
                if (arg0.arg0 === undefined || arg0.arg0 === CardNationColour.COMMON) return <>{cardMakerTranslation("clear")}</>;
                return <span className="force-content-box">
                    <CardNationColourRender nationColour={arg0.arg0}
                                            shape={CardNationColourDisplayShape.INLINE_SQUARE}
                                            location={CardStartingLocation.DEFAULT}/>
                </span>;
            }} onClick={nationColour => {
                const customNationColourElement: HTMLInputElement = document.getElementById("customNationColourInput") as HTMLInputElement;
                if (customNationColourElement !== null) customNationColourElement.value = "";
                dispatch({nationColour: nationColour, nationColourFile: 'none'})
            }}/><br/>
            {cardMakerTranslation("Custom Nation Colour")}
            {customNationColorInput}
            {customStartingLocationColorButtons}
            <br/>
            {cardMakerTranslation("Starting Location")}
            <ButtonGroup range={Object.values(CardStartingLocation)}
                         ItemRender={arg0 => {
                             if (arg0.arg0 === undefined || arg0.arg0 === CardStartingLocation.DEFAULT) return <>{cardMakerTranslation("clear")}</>;
                             return <CardNationColourRender nationColour={undefined}
                                                            shape={CardNationColourDisplayShape.INLINE_SQUARE}
                                                            location={arg0.arg0}/>;
                         }}
                         onClick={location => {
                             dispatch({startingLocation: location})
                         }}/>
            <br/>
            {cardMakerTranslation("Player Count")}
            <ButtonGroup range={[1, 2, 3, 4]}
                         ItemRender={arg0 => <>{arg0.arg0}</>}
                         onClick={number => {
                             dispatch({playerCount: number})
                         }}/><br/>
            {cardMakerTranslation("Expansion")}
            <ButtonGroup range={Object.values(CardExpansion)} ItemRender={arg0 => {
                if (arg0.arg0 === undefined || arg0.arg0 === CardExpansion.NONE) return <>{cardMakerTranslation("clear")}</>;
                return <CardExpansionRender expansion={arg0.arg0}/>;
            }} onClick={expansion => {
                dispatch({expansion: expansion})
            }}/><br/>
            {cardMakerTranslation("Victory Point")}
            <InputNumber value={this.props.victoryPoints} onChange={num => dispatch({victoryPoints: num})}/>
            <ButtonGroup range={Object.values(VictoryPointType)} ItemRender={arg0 => {
                if (arg0.arg0 === undefined)
                    return <></>;
                if (arg0.arg0 === VictoryPointType.number)
                    return <CardVictoryPointIcon victoryPoints={this.props.victoryPoints}/>;
                return <CardVictoryPointIcon victoryPoints={arg0.arg0}/>;
            }} onClick={vp => {
                dispatch({victoryPointType: vp})
            }}/><br/>
            {cardMakerTranslation("Scoring Effect")}
            <InputTextBox value={this.props.victoryPointsString} width="12em"
                          onChange={text => dispatch({victoryPointsString: text})} allowBr={true}/><br/>
            {cardMakerTranslation("Illustration")}
            <button onClick={() => {
                const illustrationInput: HTMLInputElement = document.getElementById("illustrationInput") as HTMLInputElement;
                if (illustrationInput !== null) illustrationInput.value = "";
                dispatch({illustration: ""});
            }}>{cardMakerTranslation("clear")}</button>
            {illustrationInput}<br/>
        </>;
    }
}
