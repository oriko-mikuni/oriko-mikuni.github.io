import React, {useReducer, useState} from "react";
import {allCards} from '../cards/ClientCardsManifest.ts';
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import pageTitle from "./PageTitle.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon.ts";
import CardTypeIconDisplay from "./card/CardTypeIconDisplay.tsx";
import {CardporiumDisplayState} from "./cardporiumState/GroupingDisplayState.tsx";
import {
    CardporiumFilterStateTuple, passHeader, passStateSymbol,
    passSuit, passTextFilter,
    passTypeIcon
} from "./cardporiumState/ElementFilterState.tsx";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon.ts";
import CardHeaderIconDisplay from "./card/CardHeaderIconDisplay.tsx";
import {CardStateSymbol} from "../../common/cards/CardStateSymbol.ts";
import CardStateSymbolDisplay from "./card/CardStateSymbolDisplay.tsx";

function ImperiumCardporium(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const displaySetting: CardporiumDisplayState = new CardporiumDisplayState(allCards());
    const [state, dispatch] = useReducer(CardporiumDisplayState.reducer, displaySetting);
    const suitStateTuple = new CardporiumFilterStateTuple<CardSuitIcon>(Object.values(CardSuitIcon));
    const typeIconStateTuple = new CardporiumFilterStateTuple<CardTypeIcon>(Object.values(CardTypeIcon));
    const headerIconStateTuple = new CardporiumFilterStateTuple<CardHeaderIcon>(Object.values(CardHeaderIcon));
    const stateSymbolStateTuple = new CardporiumFilterStateTuple<CardStateSymbol>(Object.values(CardStateSymbol));
    const [searchText, setSearchText] = useState("");
    const [isSearchTitle, setIsSearchTitle] = useState(true);
    const [isSearchEffect, setIsSearchEffect] = useState(true);
    const [isSearchVictory, setIsSearchVictory] = useState(true);

    const cardModuleElements: Array<React.JSX.Element> = [];
    for (const groupState of state.groupDisplays.values()) {
        cardModuleElements.push(
            <CardGroup
                groupName={groupState.groupName}
                cards={groupState.cards.filter(card => {
                    let result: boolean = true;
                    if (!passSuit(card, suitStateTuple.state)) result = false;
                    if (!passTypeIcon(card, typeIconStateTuple.state)) result = false;
                    if (!passHeader(card, headerIconStateTuple.state)) result = false;
                    if (!passStateSymbol(card, stateSymbolStateTuple.state)) result = false;
                    if (!passTextFilter(card, searchText, isSearchTitle, isSearchEffect, isSearchVictory)) result = false;
                    return result;
                })}
                display={groupState.display}
                onToggleOn={() => dispatch(CardporiumDisplayState.toggle(true, groupState.groupName))}
                onToggleOff={() => dispatch(CardporiumDisplayState.toggle(false, groupState.groupName))}
                key={groupState.groupName}
            />
        )
    }

    const suitFilterButtons: Array<React.JSX.Element> =
        suitStateTuple.filterButtons(({elem}: {elem?: CardSuitIcon}) =>
            <CardSuitIconDisplay suit={elem} />
        );
    const typeIconFilterButtons: Array<React.JSX.Element> =
        typeIconStateTuple.filterButtons(({elem}: {elem?: CardTypeIcon}) =>
            <CardTypeIconDisplay type={elem} />
        );
    const headerIconFilterButtons: Array<React.JSX.Element> =
        headerIconStateTuple.filterButtons(({elem}: {elem?: CardHeaderIcon}) =>
            <CardHeaderIconDisplay headerIcon={elem} />
        );
    const stateSymbolFilterButtons: Array<React.JSX.Element> =
        stateSymbolStateTuple.filterButtons(({elem}: {elem?: CardStateSymbol}) =>
            <CardStateSymbolDisplay state={elem} />
        );

    return <span>
        <button onClick={() => navigate("/")}>&lt;-- back</button> <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
        <h1 className="centerAlign">Imperium Cardporium</h1>
        <h2 className="centerAlign">
            Toggle:
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(false))}>
                collapse all
            </button>
            <button onClick={() => dispatch(CardporiumDisplayState.toggle(true))}>
                expand all
            </button>
        </h2>
        <h2 className="centerAlign">Filter Suits: {suitFilterButtons}</h2>
        <h2 className="centerAlign">Filter Types: {typeIconFilterButtons}</h2>
        <h2 className="centerAlign">Filter Header: {headerIconFilterButtons}</h2>
        <h2 className="centerAlign">Filter State: {stateSymbolFilterButtons}</h2>
        <h2 className="centerAlign">
            Filter text:
            <input
                type="text"
                value={searchText}
                onChange={text => setSearchText(text.target.value)}
                placeholder="Filter text"
            />
            <span>title:</span>
            <input
                type="checkbox"
                checked={isSearchTitle}
                onChange={check => setIsSearchTitle(check.target.checked)}
            />
            <span>effect:</span>
            <input
                type="checkbox"
                checked={isSearchEffect}
                onChange={check => setIsSearchEffect(check.target.checked)}
            />
            <span>victory:</span>
            <input
                type="checkbox"
                checked={isSearchVictory}
                onChange={check => setIsSearchVictory(check.target.checked)}
            />
        </h2>
        {cardModuleElements}
    </span>;
}

export default ImperiumCardporium;
