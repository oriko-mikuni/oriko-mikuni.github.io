import React from "react";
import './styles/CardRenderIconComponents.css';

function CardRenderIconComponents(
    {iconName, minimize = false}:
    {iconName: string, minimize?: boolean}
): React.JSX.Element {
    const iconCategory: string = iconName.split('-')[0];
    if (minimize && iconCategory === "suit")
        return <div className={`card-text-icon card-text-icon-suit-minimize card-text-icon-${iconName}`}/>;
    return <div className={`card-text-icon card-text-icon-${iconCategory} card-text-icon-${iconName}`}/>;
}

export default CardRenderIconComponents;
