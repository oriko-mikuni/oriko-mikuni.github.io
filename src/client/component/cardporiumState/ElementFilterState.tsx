import {ClientCard} from "../../../common/cards/ClientCard.ts";
import React, {useReducer} from "react";
import {useTranslation} from "react-i18next";

type CardporiumFilterStateAction = {
    actionType: "toggle" | "invert",
    elem?: string,
    targetValue: boolean
};
const selectedColor: string = "#005500";
const unselectedColor: string = "#dddddd";

class CardporiumFilterState {
    filterDisplaySet: Set<string>;
    filterVoidDisplay: boolean;
    fullSet: Set<string>;

    constructor(fullSet: Set<string>) {
        this.filterDisplaySet = new Set<string>();
        this.filterVoidDisplay = false;
        this.fullSet = fullSet;
    }

    public static reducer(
        state: CardporiumFilterState,
        action: CardporiumFilterStateAction
    ): CardporiumFilterState {
        const resultState: CardporiumFilterState = new CardporiumFilterState(state.fullSet);
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

    public filterOneProp(
        cards: Array<ClientCard>,
        cardToProp: (arg0: ClientCard) => string | undefined
    ): Array<ClientCard> {
        if (!this.filterVoidDisplay && this.filterDisplaySet.size === 0)
            return cards;
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
        if (!this.filterVoidDisplay && this.filterDisplaySet.size === 0)
            return cards;
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

    constructor(fullSet: Array<string>) {
        const realFullSet: Set<string> = new Set();
        fullSet.forEach((elem) => realFullSet.add(elem));
        const initialState: CardporiumFilterState = new CardporiumFilterState(realFullSet);
        [this.state, this.dispatch] = useReducer(CardporiumFilterState.reducer, initialState);
    }

    public filterButtons (
        IconRender: (elem: {elem?: string}) => React.JSX.Element
    ): Array<React.JSX.Element> {
        const {t} = useTranslation("ui", {keyPrefix: "ElementFilterState"});
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
                <IconRender />
            </button>
        ];
        this.state.fullSet.forEach((elem1: string) => {
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
                    <IconRender elem={elem1}/>
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
                {t("invert")}
            </button>
        );
        return result;
    }
}
