import React, {useReducer} from "react";
import {pageTitle} from "./PageTitle.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {
    CardBuilderState,
    ofCardBuilderStateProps,
    CardBuilderStateProps
} from "./cardBuilderState/CardBuilderState.tsx";
import {useTranslation} from "react-i18next";
import {ClientCard} from "../../common/cards/ClientCard.ts";
import Card from "./card/Card.tsx";
import {toPng} from 'html-to-image';
import CardTextRender from "./card/CardTextRender.tsx";
import {getHelpText} from "../icons/ClientIconManifest.ts";

async function downloadImage(name: string): Promise<void> {
    const element: HTMLElement | null = document.getElementById("cardDisplay");
    if (element === null) return;
    toPng(element).then(dataUrl => {
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = dataUrl;
        link.download = name + ".png";
        link.click();
    }).catch(error => console.error("Error downloading image", error));
}

async function exportJson(state: CardBuilderState): Promise<void> {
    const prop: CardBuilderStateProps = {...state.props, illustration: "", nationColourFile: 'none'};
    const jsonString: string = JSON.stringify(prop, null, 2);
    const blob: Blob = new Blob([jsonString], {type: "application/json"});
    const url: string = URL.createObjectURL(blob);
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = url;
    link.download = state.props.name + ".json";
    link.click();
    URL.revokeObjectURL(url);
}

function importJson(files: FileList | null, dispatch: (action: Partial<CardBuilderStateProps>) => void): void {
    if (files && files.length) {
        const fileReader: FileReader = new FileReader();
        fileReader.readAsText(files[0]);
        fileReader.onloadend = e => {
            if (!e.target || !e.target.result) return;
            const parseResult = JSON.parse(e.target.result.toString());
            if (typeof parseResult === "object") {
                dispatch(ofCardBuilderStateProps(parseResult as Partial<CardBuilderStateProps>))
            }
        }
    }
}

function ImperiumCardMaker(): React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const [state, dispatch]: [CardBuilderState, (action: Partial<CardBuilderStateProps>) => void]
        = useReducer(CardBuilderState.reducer, new CardBuilderState({}));
    const {t: cardMakerTranslation} = useTranslation("ui", {keyPrefix: "ImperiumCardMaker"});
    const card: ClientCard = state.getCardDisplay();
    const cardElement: React.JSX.Element = <div className="cardBox text-center justify-center"><Card card={card}/></div>;
    const toggles: React.JSX.Element = state.getOperations(dispatch);

    return <div className="flex h-full">
        <div className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#666666] text-white overflow-x-hidden overflow-y-scroll p-[10px]">
            <button onClick={() => navigate("/")}>{cardMakerTranslation("backToHomepage")}</button> <br/>
            <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'><button>{cardMakerTranslation("toFeedback")}</button></a> <br/>
            <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/wiki/Card-Maker---%E5%8D%A1%E7%89%8C%E5%88%B6%E4%BD%9C'><button>{cardMakerTranslation("howToAddIcons")}</button></a> <br/>
            <div id="cardDisplay">{cardElement}</div>
            <button onClick={() => downloadImage(card.name)}>{cardMakerTranslation("Download Image")}</button><br/>
            {/*<>{cardMakerTranslation("Download Not Supported")}</><br/>*/}
            <button onClick={() => exportJson(state)}>{cardMakerTranslation("Export JSON")}</button><br/>
            <span>{cardMakerTranslation("Import JSON")}</span>
            <input type="file" onChange={e => {importJson(e.target.files, dispatch)}}></input>
            <h2>{cardMakerTranslation("How To Add Icons")}</h2>
            <p>{cardMakerTranslation("Copy the code into the text")}</p>
            <CardTextRender text={getHelpText()}/>
        </div>
        <div className="ml-[320px] p-[20px] w-full">
            {toggles}
        </div>
    </div>
}

export default ImperiumCardMaker;
