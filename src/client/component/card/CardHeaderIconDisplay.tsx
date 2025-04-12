import React from 'react';
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import './styles/CardHeaderIconSide.css';

function CardHeaderIconDisplay(
    {headerIcon, position}:
    {headerIcon?: CardHeaderIcon, position?: 'left' | 'right'}
): React.JSX.Element {
    if (position === undefined)
        return <div className={`card-header-icon card-header-icon-${headerIcon} card-header-icon-large`}/>
    return <div className={`card-header-icon card-header-icon-${headerIcon} card-header-icon-${position}`}/>
}

export default CardHeaderIconDisplay;
