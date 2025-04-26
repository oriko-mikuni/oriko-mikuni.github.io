import React, {useReducer} from "react";
import {allCards, allGameModules, allVictoryPoints, getCardUpdate, horizonModules} from '../cards/ClientCardsManifest.ts';
import CardGroup from "./CardGroup.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {pageTitle} from "./PageTitle.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon.ts";
import CardTypeIconDisplay from "./card/CardTypeIconDisplay.tsx";
import {CardporiumDisplayState} from "./cardporiumState/GroupingDisplayState.tsx";
import {CardporiumFilter} from "./cardporiumState/ElementFilterState.tsx";
import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon.ts";
import CardHeaderIconDisplay from "./card/CardHeaderIconDisplay.tsx";
import {CardStateIcon} from "../../common/cards/CardStateIcon.ts";
import CardStateSymbolDisplay from "./card/CardStateSymbolDisplay.tsx";
import {TextFilter, TextTranslationGroup} from "./cardporiumState/TextFilterState.tsx";
import {ClientCard} from "../../common/cards/ClientCard.ts";
import {useTranslation} from "react-i18next";
import CardVictoryPointIcon from "./card/CardVictoryPointIcon.tsx";
import "./ImperiumCardporium.css";
import {GameModule, moduleNation} from "../../common/cards/GameModule.ts";
import {CardNationColour} from "../../common/cards/CardNationColour.ts";
import CardNationColourRender, {CardNationColourStyle} from "./card/CardNationColourRender.tsx";

function ImperiumCardporium(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const [state, dispatch] = useReducer(CardporiumDisplayState.reducer, new CardporiumDisplayState({cards: allCards(), update: getCardUpdate}));
    const gameModuleFilter = new CardporiumFilter(allGameModules(), false);
    const suitFilter = new CardporiumFilter(Object.values(CardSuitIcon));
    const typeFilter = new CardporiumFilter(Object.values(CardTypeIcon));
    const headerFilter = new CardporiumFilter(Object.values(CardHeaderIcon));
    const stateFilter = new CardporiumFilter(Object.values(CardStateIcon));
    const victoryFilter = new CardporiumFilter(allVictoryPoints());
    const textFilter = new TextFilter();

    const {t: gameModuleTranslation} = useTranslation("moduleName");
    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCardporium"});
    const {t: nameTranslation} = useTranslation("cardName");
    const {t: effectTranslation} = useTranslation("cardEffect");
    const {t: victoryTranslation} = useTranslation("victoryText");
    const translation: TextTranslationGroup = {
        nameTranslation,
        effectTranslation,
        victoryTranslation
    };

    const filters: Array<(cards: Array<ClientCard>) => Array<ClientCard>> = [
        cards => gameModuleFilter.state.filterOneProp(cards, card => card.gameModule),
        cards => suitFilter.state.filterAnyProps(cards, card => card.suit),
        cards => typeFilter.state.filterAnyProps(cards, card => card.typeIcon),
        cards => stateFilter.state.filterAnyProps(cards, card => card.stateSymbol),
        cards => headerFilter.state.filterOneProp(cards, card => card.headerIcon),
        cards => victoryFilter.state.filterOneProp(cards, card => card.victoryPoints === undefined ? undefined : card.victoryPoints.toString()),
        cards => textFilter.state.filterText(cards, translation),
        cards => cards.filter(card => state.includeHorizonsState || !horizonModules.has(card.gameModule))
    ]
    const allFilter: (arg0: Array<ClientCard>) => Array<ClientCard> = cards =>
        filters.reduce(
            (cardList: Array<ClientCard>, filter: (arg0: Array<ClientCard>) => Array<ClientCard>): Array<ClientCard> => filter(cardList),
            cards
        );

    const suitFilterButtons: Array<React.JSX.Element> =
        suitFilter.filterButtons(({elem}: {elem?: string}) => {
            const suit: CardSuitIcon | undefined = Object.values(CardSuitIcon).find(value => value === elem);
            if (suit === undefined) return <CardSuitIconDisplay/>;
            return <CardSuitIconDisplay suit={suit}/>;
        });
    const typeIconFilterButtons: Array<React.JSX.Element> =
        typeFilter.filterButtons(({elem}: {elem?: string}) => {
            const typeIcon: CardTypeIcon | undefined = Object.values(CardTypeIcon).find(value => value === elem);
            if (typeIcon === undefined) return <CardTypeIconDisplay/>;
            return <CardTypeIconDisplay type={typeIcon}/>;
        });
    const headerIconFilterButtons: Array<React.JSX.Element> =
        headerFilter.filterButtons(({elem}: {elem?: string}) => {
            const headerIcon: CardHeaderIcon | undefined = Object.values(CardHeaderIcon).find(value => value === elem);
            if (headerIcon === undefined) return <CardHeaderIconDisplay/>;
            return <CardHeaderIconDisplay headerIcon={headerIcon}/>;
        });
    const stateSymbolFilterButtons: Array<React.JSX.Element> =
        stateFilter.filterButtons(({elem}: {elem?: string}) => {
            const stateSymbol: CardStateIcon | undefined = Object.values(CardStateIcon).find(value => value === elem);
            if (stateSymbol === undefined) return <CardStateSymbolDisplay/>;
            return <CardStateSymbolDisplay state={stateSymbol}/>;
        });
    const victoryPointFilterButtons: Array<React.JSX.Element> =
        victoryFilter.filterButtons(({elem}: {elem?: string}) => {
            if (elem === undefined) return <CardVictoryPointIcon/>;
            if (elem === 'conditional') return <CardVictoryPointIcon victoryPoints={elem}/>;
            if (elem === 'variable') return <CardVictoryPointIcon victoryPoints={elem}/>;
            if (elem === 'negativeConditional') return <CardVictoryPointIcon victoryPoints={elem}/>;
            const maybeNumber: number = Number.parseInt(elem);
            if (Number.isNaN(maybeNumber)) return <CardVictoryPointIcon/>;
            return <CardVictoryPointIcon victoryPoints={maybeNumber}/>;
        });
    const gameModuleFilterButtons: Array<React.JSX.Element> =
        gameModuleFilter.filterButtons(({elem}: {elem?: string}) => {
            const gameModule: GameModule | undefined = Object.values(GameModule).find(value => value === elem);
            if (gameModule === undefined ) return null;
            if (!state.includeHorizonsState && horizonModules.has(gameModule)) return null;
            const nationColour: CardNationColour | undefined = moduleNation[gameModule];
            if (nationColour === undefined) return <>{gameModuleTranslation(gameModule)}</>;
            return <span>
                {gameModuleTranslation(gameModule)}
                <CardNationColourRender style={CardNationColourStyle.SQUARE} nationColour={nationColour}/>
            </span>;
        });

    const horizonsUpdateToggle: React.JSX.Element =
        <span style={{display: "flex", fontSize: "15px", alignItems: "center"}}>
            {uiTranslation("includeHorizons")}
            <input
                type="checkbox"
                style={{height: "30px", width: "30px"}}
                checked={state.includeHorizonsState}
                onChange={check => dispatch(CardporiumDisplayState.toggleIncludeHorizons(check.target.checked))}
            />
        </span>;

    return <div className="ImperiumCardporium">
        <div className="ImperiumCardporium_sidebar">
            <button onClick={() => navigate("/")}>{uiTranslation("backToHomepage")}</button> <br/>
            <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'>{uiTranslation("toFeedback")}</a>
            <h2 className="centerAlign">{uiTranslation("gameContents")}</h2> {horizonsUpdateToggle}
            <h2 className="centerAlign">{uiTranslation("NationOrCommon")}</h2> {gameModuleFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("SuitIcon")}</h2> {suitFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("TypeIcon")}</h2> {typeIconFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("HeaderIcon")}</h2> {headerIconFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("StateIcon")}</h2> {stateSymbolFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("VictoryPoint")}</h2> {victoryPointFilterButtons}
            <h2 className="centerAlign">{uiTranslation("filter-") + uiTranslation("text")}</h2> {textFilter.filterComponent(uiTranslation)}
        </div>
        <div className="ImperiumCardporium_content">
            <h1 className="centerAlign">{uiTranslation("cardporiumHeader")}</h1>
            <CardGroup cards={state.getCards()} filter={allFilter}/>
        </div>
    </div>;
}

export default ImperiumCardporium;
