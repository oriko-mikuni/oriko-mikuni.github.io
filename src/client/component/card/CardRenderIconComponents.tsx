import React from "react";
import './styles/CardRenderIconComponents.css';

function CardRenderIconComponents(
    {iconName}:
    {iconName: string}
): React.JSX.Element {
    return <div className={`card-text-icon card-text-icon-${iconName}`}/>;
}

export default CardRenderIconComponents;
