import {ClientCard} from "../../../common/cards/ClientCard.ts";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import React, {useReducer} from "react";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol.ts";

type CardporiumFilterStateAction<T> = {
    actionType: "toggle" | "invert",
    elem?: T,
    targetValue: boolean
};
const selectedColor: string = "#005500";
const unselectedColor: string = "#dddddd";

class CardporiumFilterState<T> {
    filterDisplaySet: Set<T>;
    filterVoidDisplay: boolean;
    fullSet: Set<T>;

    constructor(fullSet: Set<T>) {
        this.filterDisplaySet = new Set<T>();
        this.filterVoidDisplay = false;
        this.fullSet = fullSet;
    }

    public static reducer<T>(
        state: CardporiumFilterState<T>,
        action: CardporiumFilterStateAction<T>
    ): CardporiumFilterState<T> {
        const resultState: CardporiumFilterState<T> = new CardporiumFilterState<T>(state.fullSet);
        state.filterDisplaySet.forEach((elem) => resultState.filterDisplaySet.add(elem));
        if (action.actionType === "invert") {
            resultState.filterVoidDisplay = !state.filterVoidDisplay;
            resultState.fullSet.forEach((elem) => {
                if (resultState.filterDisplaySet.has(elem))
                    resultState.filterDisplaySet.delete(elem);
                else
                    resultState.filterDisplaySet.add(elem);
            });
            return resultState;
        }
        if (action.elem === undefined) {
            resultState.filterVoidDisplay = action.targetValue;
        } else {
            resultState.filterVoidDisplay = state.filterVoidDisplay;
            if (action.targetValue && !resultState.filterDisplaySet.has(action.elem))
                resultState.filterDisplaySet.add(action.elem);
            if (!action.targetValue && resultState.filterDisplaySet.has(action.elem))
                resultState.filterDisplaySet.delete(action.elem);
        }
        return resultState;
    }
}

export class CardporiumFilterStateTuple<T> {
    state: CardporiumFilterState<T>;
    dispatch:  React.ActionDispatch<[action: CardporiumFilterStateAction<T>]>;

    constructor(fullSet: Array<T>) {
        const realFullSet: Set<T> = new Set();
        fullSet.forEach((elem) => realFullSet.add(elem));
        const initialState: CardporiumFilterState<T> = new CardporiumFilterState<T>(realFullSet);
        [this.state, this.dispatch] = useReducer(CardporiumFilterState.reducer<T>, initialState);
    }


    public filterButtons (
        IconRenderType: (elem: {elem?: T}) => React.JSX.Element
    ): Array<React.JSX.Element> {
        let size: number = 1;
        const result: Array<React.JSX.Element> = [
            <button
                onClick = {() => this.dispatch({
                    actionType: "toggle",
                    targetValue: !this.state.filterVoidDisplay
                })}
                style={{background: this.state.filterVoidDisplay ? selectedColor : unselectedColor}}
                key={0}
            >
                <IconRenderType />
            </button>
        ];
        this.state.fullSet.forEach((elem1: T) => {
            result.push(
                <button
                    onClick={() => this.dispatch({
                        actionType: "toggle",
                        elem: elem1,
                        targetValue: !this.state.filterDisplaySet.has(elem1)
                    })}
                    style={{background: this.state.filterDisplaySet.has(elem1) ? selectedColor : unselectedColor}}
                    key={size}
                >
                    <IconRenderType elem={elem1}/>
                </button>
            );
            size ++;
        });
        result.push(
            <button
                onClick = {() => this.dispatch({
                    actionType: "invert",
                    targetValue: true
                })}
                key={size}
            >
                Invert
            </button>
        );
        return result;
    }
}

export function passSuit(
    card: ClientCard,
    suitFilter: CardporiumFilterState<CardSuitIcon>
): boolean {
    if (suitFilter.filterVoidDisplay || suitFilter.filterDisplaySet.size > 0) {
        if (card.suit.length === 0 && !suitFilter.filterVoidDisplay)
            return false;
        if (card.suit.length > 0 && !suitFilter.filterDisplaySet.has(card.suit[0]))
            return false;
    }
    return true;
}

export function passTypeIcon(
    card: ClientCard,
    typeFilter: CardporiumFilterState<CardTypeIcon>
): boolean {
    if (typeFilter.filterVoidDisplay || typeFilter.filterDisplaySet.size > 0) {
        if (card.typeIcon.length === 0 && !typeFilter.filterVoidDisplay)
            return false;
        if (card.typeIcon.length > 0 && card.typeIcon.every(
            type => !typeFilter.filterDisplaySet.has(type)))
            return false;
    }
    return true;
}

export function passStateSymbol(
    card: ClientCard,
    stateFilter: CardporiumFilterState<CardStateSymbol>
): boolean {
    if (stateFilter.filterVoidDisplay || stateFilter.filterDisplaySet.size > 0) {
        if (card.stateSymbol.length === 0 && !stateFilter.filterVoidDisplay)
            return false;
        if (card.stateSymbol.length > 0 && card.stateSymbol.every(
            state => !stateFilter.filterDisplaySet.has(state)))
            return false;
    }
    return true;
}

export function passHeader(
    card: ClientCard,
    headerFilter: CardporiumFilterState<CardHeaderIcon>
): boolean {
    if (headerFilter.filterVoidDisplay || headerFilter.filterDisplaySet.size > 0) {
        if (card.headerIcon === undefined && !headerFilter.filterVoidDisplay)
            return false;
        if (card.headerIcon !== undefined && !headerFilter.filterDisplaySet.has(card.headerIcon))
            return false;
    }
    return true;
}

function simplifyText(text: string): string {
    return text
        .toLowerCase()
        .replace(/^/g, ' ')
        .replace(/\s/g, ' ')
        .replace(/\//g, ' ')
        .replace(/\{([^}]+)}/g, " $1 ")
        .replace(/\[([^\]]+)]/g, " $1 ")
        .replace(/\(([^)]+)\)/g, " $1 ")
        .replace(/["',.:]/g, ' ')
        .replace(/  +/g, ' ');
}

export function passTextFilter(
    card: ClientCard,
    searchText: string,
    searchTitle: boolean,
    searchEffect: boolean,
    searchVictory: boolean
): boolean {
    const simplifiedSearchText = simplifyText(searchText);
    if (simplifiedSearchText.length === 0 || simplifiedSearchText === " ")
        return true;

    let result: boolean = false;
    if (searchTitle) {
        if (simplifyText(card.name).includes(simplifiedSearchText)) result = true;
    }
    if (searchEffect && card.effectText !== undefined) {
        if (simplifyText(card.effectText).includes(simplifiedSearchText)) result = true;
    }
    if (searchVictory && card.victoryPointsString !== undefined) {
        if (simplifyText(card.victoryPointsString).toLowerCase().includes(simplifiedSearchText)) result = true;
    }
    return result;
}
