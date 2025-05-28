import React, {useReducer} from "react";
import {pageTitle} from "./PageTitle.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CommonSetsState} from "./commonSetsState/CommonSetsState.tsx";
import {getCommonSetCards} from "../cards/ClientCommonSetManifest.ts";
import {CardDetailDescription} from "./tooltip/CardDetailDescription.tsx";
import {ClientCard} from "../../common/cards/ClientCard.ts";
import CheckBox from "./common/CheckBox.tsx";
import CardTextRender from "./card/CardTextRender.tsx";
import {CardName} from "../../common/cards/CardName.ts";
import {getCard} from "../cards/ClientCardsManifest.ts";
import {CommonSetName} from "../../server/commonSets/CommonSet.ts";

function ImperiumCommonSets(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const {t: cardTitleTranslation} = useTranslation("cardName");
    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCommonSets"});
    const {t: commonSetsTranslation} = useTranslation("commonSets");
    const [state, dispatch] = useReducer(CommonSetsState.reducer, new CommonSetsState({}));

    const commonSetCards: Array<ClientCard> | undefined = getCommonSetCards(state.props.selectedCommonSetName);
    const detailedCardRender: React.JSX.Element | null =
        state.props.selectedCard === 'none' ? null :
            <div>
                <h2 className="text-center justify-center">{cardTitleTranslation(state.props.selectedCard.name)}</h2>
                <CardDetailDescription card={state.props.selectedCard} availableCards={commonSetCards ?? []} isTextBlack={true}/>
            </div>;

    const minimizeCardsToggle: React.JSX.Element =
        <span className="flex item-center">
            <label className="contents">
                {uiTranslation("minimizeCardDisplay")}
                <CheckBox size="24px" checked={state.props.minimizeCard}
                          onChange={check => dispatch(CommonSetsState.toggleMinimizeCard(check))}/>
            </label>
        </span>;

    const includeHorizonsToggle: React.JSX.Element =
        <span className="flex item-center">
            <label className="contents">
                {uiTranslation("includeHorizons")}
                <CheckBox size="24px" checked={state.props.includeHorizons}
                          onChange={check => {
                              const selectElement: HTMLSelectElement = document.getElementById("commonSetSelect") as HTMLSelectElement;
                              if (selectElement !== null) selectElement.value = 'default';
                              dispatch(CommonSetsState.toggleHorizons(check));
                          }}/>
            </label>
        </span>;

    const tradeRouteDescription: React.JSX.Element | null = !state.props.includeHorizons ? null : <div>
        <h2 className="text-center justify-center">{uiTranslation("Using Trade Route Expansion")}</h2>
        <CardTextRender text={uiTranslation("Using Trade Route Expansion Description")}
                        onClickText={(name: string): void => {
                            if (name === "commonTradeRoutes") {
                                const selectElement: HTMLSelectElement = document.getElementById("commonSetSelect") as HTMLSelectElement;
                                if (selectElement !== null) selectElement.value = CommonSetName.TRADE_ROUTES;
                                dispatch(CommonSetsState.toggleSelectedCommonSet(CommonSetName.TRADE_ROUTES));
                            } else if (name === "MERC1A") {
                                const card: ClientCard | undefined = getCard(CardName.MERCHANT1);
                                if (card) dispatch(CommonSetsState.toggleSelectedCard(card));
                            } else if (name === "3FAM3") {
                                const card: ClientCard | undefined = getCard(CardName.WELCOMING);
                                if (card) dispatch(CommonSetsState.toggleSelectedCard(card));
                            }
                        }}
                        isBlack={true}/>
    </div>;

    const customizingSetsDescription: React.JSX.Element | null = !state.props.includeMixedSets ? null : <div>
        <h2 className="text-center justify-center">{uiTranslation("Customizing Your Set")}</h2>
        <CardTextRender text={uiTranslation("Customizing Your Set Description")}
                        onClickText={(name: string): void => {
                            if (name === "MIXED_SET") {
                                window.open("https://boardgamegeek.com/filepage/276362/imperium-mixed-common-card-sets","_blank");
                            }
                        }}
                        isBlack={true}/>
    </div>

    const cardSetRendering: React.JSX.Element | null =
        state.renderCardSet(card => dispatch(CommonSetsState.toggleSelectedCard(card)));

    return <div className="flex h-full">
        <div
            className="fixed top-0 left-0 bottom-0 w-[400px] bg-[#aaaaaa] text-black overflow-x-hidden overflow-y-scroll p-[10px]">
            <button onClick={() => navigate("/")}>{uiTranslation("backToHomepage")}</button>
            <br/>
            <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'>
                <button>{uiTranslation("toFeedback")}</button>
            </a> <br/>
            <h2 className="text-center justify-center">{uiTranslation("Choose Common Set")}</h2>
            {state.getSetSelection(commonSetsTranslation, dispatch)}
            {includeHorizonsToggle}
            <h2 className="text-center justify-center">{uiTranslation("cardDisplaySettings")}</h2>
            {minimizeCardsToggle}
            {detailedCardRender}
            {tradeRouteDescription}
            {customizingSetsDescription}
        </div>
        <div className="w-full ml-[400px] p-[10px]">
            {cardSetRendering}
        </div>
    </div>
}

export default ImperiumCommonSets;
