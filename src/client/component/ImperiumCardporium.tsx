import React from "react";
import {allModules} from '../cards/ClientCardsManifest';
import {ClientCard} from "../../common/cards/ClientCard";
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import ImperiumCardporiumHead from "./ImperiumCardporiumHead.tsx";
import pageTitle from "./PageTitle.tsx";
import {ReactState, setAllState} from "./common/ReactState.tsx";

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
                return <CardGroup module={module} cards={cards} displayState={displayState} key={idx}/>;
            }
        );
    return <div>
        <button onClick={(): void | Promise<void> => navigate("/")}>&lt;-- back</button> <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
        <ImperiumCardporiumHead/>
        <button onClick={(): void | Promise<void> => setAllState(groupDisplayStates, false)}>collapse all</button>
        <button onClick={(): void | Promise<void> => setAllState(groupDisplayStates, true)}>expand all</button>
        {cardModuleElements}
    </div>;
}

export default ImperiumCardporium;
