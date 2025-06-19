import React, {useState} from "react";
import {ClientCard} from "../../../common/cards/ClientCard.ts";
import { TFunction } from "i18next";
import {UnitsUtils} from "../../../common/Units.ts";
import CheckBox from "../common/CheckBox.tsx";
import InputTextBox from "../common/InputTextBox.tsx";

export type TextTranslationGroup = {
    nameTranslation: TFunction<"cardName", undefined>,
    effectTranslation: TFunction<"cardEffect", undefined>,
    victoryTranslation: TFunction<"cardVictoryText", undefined>
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

    public passText(
        card: ClientCard,
        translation: TextTranslationGroup,
    ): boolean {
        const simplifiedSearchText = simplifyText(this.searchText);
        if (!simplifiedSearchText)
            return true;

        if (this.isSearchTitle) {
            const display: string = translation.nameTranslation(card.name);
            if (simplifyText(display).includes(simplifiedSearchText))
                return true;
        }

        if (this.isSearchEffect && card.effectText !== undefined) {
            const display: string = card.effectText.map(text => translation.effectTranslation(text)).join(" ");
            if (simplifyText(display).includes(simplifiedSearchText))
                return true;
        }

        if (this.isSearchEffect && (!UnitsUtils.isEmpty(card.developmentCost) || card.developmentCostString.length > 0)) {
            const developmentCostDisplay =
                (UnitsUtils.developmentCostToString(card.developmentCost ?? {})) +
                card.developmentCostString.map(text => translation.effectTranslation(text)).join(" ");
            if (simplifyText(developmentCostDisplay).includes(simplifiedSearchText))
                return true;
        }

        if (this.isSearchVictory && card.victoryPointsString !== undefined) {
            const display: string = translation.victoryTranslation(card.victoryPointsString);
            if (simplifyText(display).includes(simplifiedSearchText))
                return true;
        }

        return false;
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
            <InputTextBox value={this.state.searchText} onChange={text => {this.setSearchText(text)}} placeholder={t("searchText")} width="12em"/>
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
                <CheckBox size="15px" checked={this.state.isSearchTitle} onChange={check => this.setIsSearchTitle(check)}/>
            </label>
            <label>
                <span>{t("effect")}</span>
                <CheckBox size="15px" checked={this.state.isSearchEffect} onChange={check => this.setIsSearchEffect(check)}/>
            </label>
            <label>
                <span>{t("victory")}</span>
                <CheckBox size="15px" checked={this.state.isSearchVictory} onChange={check => this.setIsSearchVictory(check)}/>
            </label>
        </>;
    }
}
