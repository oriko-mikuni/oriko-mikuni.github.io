import React from "react";
import './styles/CardEffectTextBox.css';
import {RenderCardText} from "./CardText.tsx";

function RenderDevelopmentCost(developmentCost?: string) : Array<React.JSX.Element> | null {
    if (developmentCost === undefined || developmentCost === "") {
        return null;
    }
    const textRender: Array<React.JSX.Element> | null = RenderCardText("Development Cost: " + developmentCost);
    if (textRender === null) {
        return null;
    }

    return [<br key={0}/>, <div className="card-development-cost" key={1}>{textRender}</div>];
}

export function CardEffectTextBox(
    {effectText, developmentCost}:
    {effectText?: string, developmentCost?: string}
): React.JSX.Element | null {
    if (effectText !== undefined || developmentCost !== undefined) {
        return <div className="card-effect-text">
            {RenderCardText(effectText)}
            {RenderDevelopmentCost(developmentCost)}
        </div>;
    } else {
        return null;
    }
}
