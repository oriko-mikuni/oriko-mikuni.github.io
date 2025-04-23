import {ClientCard} from "../../../common/cards/ClientCard.ts";
import React, {useReducer} from "react";
import {useTranslation} from "react-i18next";

type CardporiumFilterStateAction = {
    actionType: "toggle" | "invert",
    elem?: string,
    targetValue: boolean
};

const selectedStyle: Record<0 | 1, React.CSSProperties> = {
    0: {background: "#303030", color: "#fff"},
    1: {background: "#dddddd", color: "#000"}
};

class CardporiumFilterState {
    filterDisplaySet: Set<string>;
    filterVoidDisplay: boolean;
    fullSet: Set<string>;
    includeVoidContent: boolean;

    constructor(fullSet: Set<string>, includeVoidContent: boolean, currentSet: Set<string>) {
        this.filterVoidDisplay = true;
        this.fullSet = fullSet;
        this.filterDisplaySet = currentSet !== undefined ? currentSet : new Set<string>(fullSet);
        this.includeVoidContent = includeVoidContent;
    }

    public static reducer(
        state: CardporiumFilterState,
        action: CardporiumFilterStateAction
    ): CardporiumFilterState {
        const resultState: CardporiumFilterState = new CardporiumFilterState(state.fullSet, state.includeVoidContent, new Set<string>());
        if (action.actionType === "invert") {
            resultState.filterVoidDisplay = !state.filterVoidDisplay;

            resultState.fullSet.forEach((elem) => {
                if (!state.filterDisplaySet.has(elem))
                    resultState.filterDisplaySet.add(elem);
            });
            return resultState;
        }
        resultState.filterDisplaySet = state.filterDisplaySet;
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

    public filterOneProp(
        cards: Array<ClientCard>,
        cardToProp: (arg0: ClientCard) => string | undefined
    ): Array<ClientCard> {
        return cards.filter(card => {
            const prop: string | undefined = cardToProp(card);
            if (prop === undefined)
                return this.filterVoidDisplay;
            else
                return this.filterDisplaySet.has(prop);
        })
    }

    public filterAnyProps(
        cards: Array<ClientCard>,
        cardToProp: (arg0: ClientCard) => Array<string>
    ): Array<ClientCard> {
        return cards.filter(card => {
            const props: Array<string> = cardToProp(card);
            if (props.length === 0)
                return this.filterVoidDisplay;
            else
                return props.some(prop => this.filterDisplaySet.has(prop));
        })
    }
}

export class CardporiumFilter {
    state: CardporiumFilterState;
    dispatch:  React.ActionDispatch<[action: CardporiumFilterStateAction]>;

    constructor(fullSet: Array<string>, includeVoidContent: boolean = true) {
        const realFullSet: Set<string> = new Set();
        fullSet.forEach((elem) => realFullSet.add(elem));
        [this.state, this.dispatch] = useReducer(
            CardporiumFilterState.reducer,
            new CardporiumFilterState(realFullSet, includeVoidContent, new Set<string>(realFullSet))
        );
    }

    public filterButtons (
        IconRender: (elem: {elem?: string}) => React.JSX.Element
    ): Array<React.JSX.Element> {
        const {t} = useTranslation("ui", {keyPrefix: "ElementFilterState"});
        let size: number = 1;
        const result: Array<React.JSX.Element> = [];
        if (this.state.includeVoidContent) {
            result.push(
                <button
                    onClick={() => this.dispatch({
                        actionType: "toggle",
                        targetValue: !this.state.filterVoidDisplay
                    })}
                    style={selectedStyle[this.state.filterVoidDisplay ? 1 : 0]}
                    key={0}
                >
                    <IconRender/>
                </button>);
        }
        this.state.fullSet.forEach((elem1: string) => {
            result.push(
                <button
                    onClick={() => this.dispatch({
                        actionType: "toggle",
                        elem: elem1,
                        targetValue: !this.state.filterDisplaySet.has(elem1)
                    })}
                    style={selectedStyle[this.state.filterDisplaySet.has(elem1) ? 1 : 0]}
                    key={size}
                >
                    <IconRender elem={elem1}/>
                </button>
            );
            size ++;
        });
        result.push(
            <button
                onClick={() => this.dispatch({
                    actionType: "invert",
                    targetValue: true
                })}
                key={size}
            >
                {t("invert")}
            </button>
        );
        return result;
    }
}
