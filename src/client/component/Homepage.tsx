import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import {pageTitle} from "./PageTitle.tsx";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import {useTranslation} from "react-i18next";

const featureButtonClassName: string = "w-[300px] h-[75px] text-[24px]";

function Homepage() : React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const {t} = useTranslation("ui", {keyPrefix: "HomepageText"});
    return <div className="text-center justify-center gap-[10px]">
        <h1>{t("header")}</h1>
        <span className="gap-[10px] inline-flex">
            <CardSuitIconDisplay suit={CardSuitIcon.POWER} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.FAME} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.UNCIVILISED} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.CIVILISED} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.REGION} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.TRIBUTARY} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.UNREST} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.TRADE_ROUTE} position={'home-large'}/>
            <CardSuitIconDisplay suit={CardSuitIcon.GADGET} position={'home-large'}/>
        </span>
        <p>
            This is a webpage of the great card game Imperium:&nbsp;
            <a href="https://www.ospreypublishing.com/uk/imperium-classics-9781472844743/">Classics</a>,&nbsp;
            <a href="https://www.ospreypublishing.com/uk/imperium-legends-9781472844750/">Legends</a>
            &nbsp;and&nbsp;<a href="https://www.ospreypublishing.com/uk/imperium-horizons-9781472858368/">Horizons</a>
            .<br/>
            It is not affiliated with Osprey in any way.<br/>
            It is not endorsed by Osprey either.<br/>
            The card game is great and this webpage recommends purchasing it for personal use.
        </p>
        <button onClick={() => navigate('/cards')} className={featureButtonClassName}>{t("toCardList")}</button>
        <br/>
        <button onClick={() => navigate('/cardMaker')} className={featureButtonClassName}>{t("toCardMaker")}</button>
        <br/>
        <button onClick={() => navigate('/commonSets')} className={featureButtonClassName}>{t("toCommonSets")}</button>
        <br/>
        <a href='https://www.ospreypublishing.com/media/1kmpbipw/imperium-horizons-rulebook.pdf'><button className={featureButtonClassName}>{t("toRulebook")}</button></a>
        <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/'><button>{t("toSource")}</button></a>
        <br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'><button>{t("toFeedback")}</button></a>
    </div>
}

export default Homepage;
