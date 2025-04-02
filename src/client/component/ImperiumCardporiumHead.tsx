import React from "react";
import CardSuitIconDisplay from "./card/CardSuitIconDisplay.tsx";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon.ts";
import "./ImperiumCardporiumHead.css";

function ImperiumCardporiumHead(): React.JSX.Element {
    return <div>
        <h1 className="imperium-cardporium-head">Imperium Cardporium<br/>
            <span className="imperium-cardporium-large-suits">
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

        <p className="imperium-cardporium-announcement">
            This is a card list webpage of the great board game Imperium:&nbsp;
            <a href="https://www.ospreypublishing.com/uk/imperium-classics-9781472844743/">Classics</a>,&nbsp;
            <a href="https://www.ospreypublishing.com/uk/imperium-legends-9781472844750/">Legends</a>
            &nbsp;and&nbsp;<a href="https://www.ospreypublishing.com/uk/imperium-horizons-9781472858368/">Horizons</a>
            .<br/>
            It is not affiliated with Osprey in any way.<br/>
            It is not endorsed by Osprey either.<br/>
            The board game is great and this webpage recommends purchasing it for personal use.
        </p>
    </div>
}

export default ImperiumCardporiumHead;
