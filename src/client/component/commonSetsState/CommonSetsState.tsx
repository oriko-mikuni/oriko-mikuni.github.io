import {ClientCard} from "../../../common/cards/ClientCard.ts";
import {CommonSetName, getCommonSetName} from "../../../server/commonSets/CommonSet.ts";
import React from "react";
import {allCommonSets, getCommonSet} from "../../cards/ClientCommonSetManifest.ts";
import {CommonSetRender} from "./CommonSetRender.tsx";
import {TFunction} from "i18next";

type CommonSetsStateAction = Partial<CommonSetsStateProps>;

type CommonSetsStateProps = {
    selectedCommonSetName: CommonSetName | 'default';
    selectedCard: ClientCard | 'none';
    minimizeCard: boolean;
    includeMixedSets: boolean;
    includeHorizons: boolean;
};

const defaultCommonSetsStateProps: CommonSetsStateProps = {
    selectedCommonSetName: 'default',
    selectedCard: 'none',
    minimizeCard: false,
    includeMixedSets: false,
    includeHorizons: false
}

export class CommonSetsState {
    props: CommonSetsStateProps;
    constructor(props: Partial<CommonSetsStateProps>) {
        this.props = {...defaultCommonSetsStateProps, ...props};
    }

    public static toggleSelectedCommonSet(name: CommonSetName | 'default'): CommonSetsStateAction {
        return {selectedCommonSetName: name, selectedCard: 'none'};
    }

    public static toggleSelectedCard(name: ClientCard | 'none'): CommonSetsStateAction {
        return {selectedCard: name};
    }

    public static toggleMinimizeCard(targetMinimizedCard: boolean): CommonSetsStateAction {
        return {minimizeCard: targetMinimizedCard};
    }

    public static toggleHorizons(target: boolean): CommonSetsStateAction {
        return {includeHorizons: target, selectedCommonSetName: "default", selectedCard: 'none'};
    }

    public static enableMixedSets(): CommonSetsStateAction {
        return {includeMixedSets: true, selectedCommonSetName: "default", selectedCard: 'none'};
    }

    public static reducer(
        state: CommonSetsState,
        action: CommonSetsStateAction
    ): CommonSetsState {
        const props: CommonSetsStateProps = {...state.props, ...action};
        return new CommonSetsState(props);
    }

    public renderCardSet(
        onClickACard?: (arg0: ClientCard) => void,
    ): React.JSX.Element | null {
        return <CommonSetRender commonSet={getCommonSet(this.props.selectedCommonSetName)} minimizeCard={this.props.minimizeCard} onClickACard={onClickACard}/>;
    }

    public getSetSelection(
        commonSetsTranslation: TFunction<string, string>,
        dispatch: (action: Partial<CommonSetsStateProps>) => void
    ): React.JSX.Element {
        const onChange: (a: React.ChangeEvent<HTMLSelectElement>) => void = (a: React.ChangeEvent<HTMLSelectElement>): void => {
            if (a.target.value === 'default') {
                dispatch(CommonSetsState.toggleSelectedCommonSet('default'));
            } else {
                const name: CommonSetName | undefined = getCommonSetName(a.target.value);
                if (name === CommonSetName.INCLUDE_MIXED_PLACEHOLDER) {
                    const selectElement: HTMLSelectElement = document.getElementById("commonSetSelect") as HTMLSelectElement;
                    if (selectElement !== null) selectElement.value = "default";
                    dispatch(CommonSetsState.enableMixedSets());
                }
                else if (name !== undefined) {
                    dispatch(CommonSetsState.toggleSelectedCommonSet(name));
                }
            }
        };

        const setOptionNames: Array<string> = ["default", ...allCommonSets(this.props.includeHorizons, this.props.includeMixedSets)];
        if (!this.props.includeMixedSets) setOptionNames.push(CommonSetName.INCLUDE_MIXED_PLACEHOLDER);

        const setOptions: Array<React.JSX.Element> = setOptionNames.map(
            (name: string, idx: number): React.JSX.Element =>
                <option key={idx} value={name}>{commonSetsTranslation(name + ".name")}</option>
        );

        return <select id="commonSetSelect" onChange={onChange} defaultValue={this.props.selectedCommonSetName}>
            {setOptions}
        </select>;
    }
}
