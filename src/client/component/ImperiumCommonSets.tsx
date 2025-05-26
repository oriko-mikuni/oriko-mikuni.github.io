import React, {useReducer} from "react";
import {pageTitle} from "./PageTitle.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CommonSetsState} from "./commonSetsState/CommonSetsState.tsx";
import {CommonSetName, getCommonSetName} from "../../server/commonSets/CommonSet.ts";
import {allCommonSets, getCommonSetCards} from "../cards/ClientCommonSetManifest.ts";
import {CardDetailDescription} from "./tooltip/CardDetailDescription.tsx";
import {ClientCard} from "../../common/cards/ClientCard.ts";
import CheckBox from "./common/CheckBox.tsx";

function ImperiumCommonSets(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const {t: cardTitleTranslation} = useTranslation("cardName");
    const {t: uiTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCommonSets"});
    const {t: commonSetsTranslation} = useTranslation("commonSets");
    const [state, dispatch] = useReducer(CommonSetsState.reducer, new CommonSetsState({}));

    const commonSetCards: Array<ClientCard> | undefined = getCommonSetCards(state.props.selectedCommonSetName);
    const detailedCardRender: React.JSX.Element | null =
        state.props.selectedCard === 'none' || commonSetCards === undefined ? null :
            <div>
                <h2 className="text-center justify-center">{cardTitleTranslation(state.props.selectedCard.name)}</h2>
                <CardDetailDescription card={state.props.selectedCard} availableCards={commonSetCards} isTextBlack={true}/>
            </div>;

    const minimizeCardsToggle: React.JSX.Element =
        <span className="flex item-center">
            <label className="contents">
                {uiTranslation("minimizeCardDisplay")}
                <CheckBox size="24px" checked={state.props.minimizeCard}
                          onChange={check => dispatch(CommonSetsState.toggleMinimizeCard(check))}/>
            </label>
        </span>;

    const cardSetRendering: React.JSX.Element | null =
        state.renderCardSet(card => dispatch(CommonSetsState.toggleSelectedCard(card)));

    return <div className="flex h-full">
        <div className="fixed top-0 left-0 bottom-0 w-[350px] bg-[#cccccc] text-black overflow-x-hidden overflow-y-scroll p-[10px]">
            <button onClick={() => navigate("/")}>{uiTranslation("backToHomepage")}</button> <br/>
            <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'><button>{uiTranslation("toFeedback")}</button></a> <br/>
            <h2 className="text-center justify-center">{uiTranslation("Choose Common Set")}</h2>
            <select
                onChange={(a: React.ChangeEvent<HTMLSelectElement>) => {
                    const commonSetName: CommonSetName | undefined = getCommonSetName(a.target.value);
                    if (commonSetName !== undefined) dispatch(CommonSetsState.toggleSelectedCommonSet(commonSetName));
                }}
                defaultValue={state.props.selectedCommonSetName}>
                {allCommonSets().map(set => <option value={set} key={set}>
                    {commonSetsTranslation(set + ".name")}
                </option>)}
            </select>
            <h2 className="text-center justify-center">{uiTranslation("cardDisplaySettings")}</h2>
            {minimizeCardsToggle}
            <br/>
            {detailedCardRender}
        </div>
        <div className="w-full ml-[350px] p-[10px]">
            {cardSetRendering}
        </div>
    </div>
}

export default ImperiumCommonSets;
