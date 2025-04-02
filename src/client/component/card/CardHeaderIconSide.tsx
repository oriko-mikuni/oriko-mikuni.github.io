import React from 'react';
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon.ts";
import './styles/CardHeaderIconSide.css';

function CardHeaderIconSide(
    {headerIcon, position}:
    {headerIcon: CardHeaderIcon, position: 'left' | 'right'}
): React.JSX.Element {
    return <div className={`card-header-icon card-header-icon-${headerIcon} card-header-icon-${position}`}/>
}

export default CardHeaderIconSide;
