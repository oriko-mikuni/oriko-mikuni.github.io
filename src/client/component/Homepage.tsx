import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import pageTitle from "./PageTitle.tsx";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import {useTranslation} from "react-i18next";

const largeSuitArrayStyle: React.CSSProperties = {
    gap: "10px",
    display: "inline-flex"
};

const featureButtonStyle: React.CSSProperties = {
    width: "300px",
    height: "75px",
    fontSize: "23px",
    fontFamily: "monospace",
}

function Homepage() : React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    const {t} = useTranslation("ui", {keyPrefix: "HomepageText"});
    return <div className="centerAlign">
        <h1>
            {t("header")}
            <br/>
            <span style={largeSuitArrayStyle}>
                <CardSuitIconDisplay suit={CardSuitIcon.POWER} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.FAME} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.UNCIVILISED} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.CIVILISED} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.REGION} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.TRIBUTARY} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.UNREST} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.TRADE_ROUTE} isLarge={true} />
                <CardSuitIconDisplay suit={CardSuitIcon.GADGET} isLarge={true} />
            </span>
        </h1>
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
        <button onClick={() => navigate('/cards')} style={featureButtonStyle}>{t("toCardList")}</button><br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/'>{t("toSource")}</a><br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'>{t("toFeedback")}</a>
    </div>
}

export default Homepage;
