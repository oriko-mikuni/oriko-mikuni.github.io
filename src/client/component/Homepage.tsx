import {NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import pageTitle from "./PageTitle.tsx";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";

const centerAlign: React.CSSProperties = {
    textAlign: "center"
};

const imperiumLargeSuitArray: React.CSSProperties = {
    gap: "10px",
    display: "inline-flex"
};

function Homepage() : React.JSX.Element {
    pageTitle();
    const navigate: NavigateFunction = useNavigate();
    return <div style={centerAlign}>
        <h1>
            Imperium Card Game<br/>
            <span style={imperiumLargeSuitArray}>
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
        <button onClick={(): void | Promise<void> => navigate('/cards')}>
            imperium card list
        </button><br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/'> source </a><br/>
        <a href='https://github.com/oriko-mikuni/oriko-mikuni.github.io/issues'> feedback </a>
    </div>
}

export default Homepage;
