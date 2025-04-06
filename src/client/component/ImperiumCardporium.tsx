import React, {Dispatch, SetStateAction} from "react";
import {allModules} from '../cards/ClientCardsManifest.ts';
import {ClientCard} from "../../common/cards/ClientCard.ts";
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import pageTitle from "./PageTitle.tsx";

type ReactState<T> = [T, Dispatch<SetStateAction<T>>];

function setAllState<T>(stateGroup: Array<ReactState<T>>, newState: T): void {
    stateGroup.forEach((state: ReactState<T>): void => state[1](newState))
}

function toggleDisplayState(state: ReactState<boolean>): void {
    state[1](!state[0]);
}

function ImperiumCardporium(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const groupDisplayStates: Array<ReactState<boolean>> = [];
    const cardModuleElements: Array<React.JSX.Element> =
        allModules().map(
            (
                [module, cards]: [module: string, cards: Array<ClientCard>],
                idx: number
            ): React.JSX.Element => {
                const displayState: ReactState<boolean> = React.useState(false);
                groupDisplayStates.push(displayState);
                return <CardGroup
                    module={module} cards={cards}
                    display={displayState[0]}
                    onToggle={(): void => toggleDisplayState(displayState)}
                    key={idx}
                />;
            }
        );
    return <span>
        <button onClick={(): void | Promise<void> => navigate("/")}>&lt;-- back</button> <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
        <h1 className="centerAlign">Imperium Cardporium</h1>
        <h2 className="centerAlign">
            Toggle:
            <button onClick={(): void => setAllState(groupDisplayStates, false)}>collapse all</button>
            <button onClick={(): void => setAllState(groupDisplayStates, true)}>expand all</button>
        </h2>
        {cardModuleElements}
    </span>;
}

export default ImperiumCardporium;
