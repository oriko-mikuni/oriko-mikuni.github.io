import React, {useState} from "react";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import { TFunction } from "i18next";
import {UnitsUtils} from "../../../common/Units.ts";
import CheckBox from "../common/CheckBox.tsx";
import InputTextBox from "../common/InputTextBox.tsx";

export type TextTranslationGroup = {
    nameTranslation?: TFunction<"cardName", undefined>,
    effectTranslation?: TFunction<"cardEffect", undefined>,
    victoryTranslation?: TFunction<"cardVictoryText", undefined>
}

function simplifyText(text: string): string {
    let result: string = text
        .toLowerCase()
        .replace(/^/g, ' ')
        .replace(/\s/g, ' ')
        .replace(/\//g, ' ')
        .replace(/\{([^}]+)}/g, " $1 ")
        .replace(/\[([^\]]+)]/g, " $1 ")
        .replace(/\(([^)]+)\)/g, " $1 ")
        .replace(/["',.:。]/g, ' ')
        .replace(/ /g, '');
    if (result.startsWith(' ')) {
        result = result.slice(1, result.length);
    }
    if (result.endsWith(' ')) {
        result = result.slice(0, result.length - 1);
    }
    return result;
}

export class TextFilterState {
    searchText: string;
    isSearchTitle: boolean;
    isSearchEffect: boolean;
    isSearchVictory: boolean;

    constructor() {
        this.searchText = "";
        this.isSearchTitle = false;
        this.isSearchEffect = false;
        this.isSearchVictory = false;
    }

    public filterText(
        cardList: Array<ClientCard>,
        translation: TextTranslationGroup,
    ): Array<ClientCard> {
        const simplifiedSearchText = simplifyText(this.searchText);
        if (!simplifiedSearchText)
            return cardList;
        return cardList.filter(card => {
            if (this.isSearchTitle) {
                const display: string = translation.nameTranslation === undefined ? card.name
                    : translation.nameTranslation(card.name);
                if (simplifyText(display).includes(simplifiedSearchText))
                    return true;
            }
            if (this.isSearchEffect && card.effectText !== undefined) {
                let display: string;
                const trans = translation.effectTranslation;
                if (trans === undefined) {
                    display = card.effectText.join(" ");
                } else {
                    display = card.effectText.map(text => trans(text)).join(" ");
                }
                if (simplifyText(display).includes(simplifiedSearchText))
                    return true;
            }
            if (this.isSearchEffect && (!UnitsUtils.isEmpty(card.developmentCost) || card.developmentCostString.length > 0)) {
                const trans = translation.effectTranslation;
                const developmentCostDisplay = trans === undefined ? (
                    (UnitsUtils.toString(card.developmentCost) ?? "") +
                    card.developmentCostString.join(" ")
                ): (
                    (UnitsUtils.toString(card.developmentCost) ?? "") +
                    card.developmentCostString.map(text => trans(text)).join(" ")
                );
                if (simplifyText(developmentCostDisplay).includes(simplifiedSearchText))
                    return true;
            }
            if (this.isSearchVictory && card.victoryPointsString !== undefined) {
                const display: string = translation.victoryTranslation === undefined ? card.victoryPointsString
                    : translation.victoryTranslation(card.victoryPointsString);
                if (simplifyText(display).includes(simplifiedSearchText))
                    return true;
            }
            return false;
        });
    }
}

export class TextFilter {
    state: TextFilterState;

    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    setIsSearchTitle: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSearchEffect: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSearchVictory: React.Dispatch<React.SetStateAction<boolean>>;

    constructor() {
        this.state = new TextFilterState();
        [this.state.searchText, this.setSearchText] = useState("");
        [this.state.isSearchTitle, this.setIsSearchTitle] = useState(true);
        [this.state.isSearchEffect, this.setIsSearchEffect] = useState(true);
        [this.state.isSearchVictory, this.setIsSearchVictory] = useState(true);
    }

    filterComponent(t: TFunction<string, string>): React.JSX.Element {
        return <>
            <InputTextBox
                value={this.state.searchText}
                onChange={text => {this.setSearchText(text)}}
                placeholder={t("searchText")}
                width="15em"
            />
            <button
                onClick={() => {
                    this.setIsSearchTitle(true);
                    this.setIsSearchEffect(true);
                    this.setIsSearchVictory(true);
                    this.setSearchText("");
                }}
            >{t("reset")}</button>
            <br/>
            <label>
                <span>{t("title")}</span>
                <CheckBox checked={this.state.isSearchTitle} onChange={check => this.setIsSearchTitle(check)}/>
            </label>
            <label>
                <span>{t("effect")}</span>
                <CheckBox checked={this.state.isSearchEffect} onChange={check => this.setIsSearchEffect(check)}/>
            </label>
            <label>
                <span>{t("victory")}</span>
                <CheckBox checked={this.state.isSearchVictory} onChange={check => this.setIsSearchVictory(check)}/>
            </label>
        </>;
    }
}
