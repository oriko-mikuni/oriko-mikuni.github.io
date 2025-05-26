import {ClientCard} from "../../../common/cards/ClientCard.ts";
import {CommonSetName} from "../../../server/commonSets/CommonSet.ts";
import React from "react";
import {allCommonSets, getCommonSet} from "../../cards/ClientCommonSetManifest.ts";
import {ClientCommonSet} from "../../cards/ClientCommonSet.ts";
import {CommonSetRender} from "./CommonSetRender.tsx";

type CommonSetsStateAction = Partial<CommonSetsStateProps>;

type CommonSetsStateProps = {
    selectedCommonSetName: CommonSetName;
    selectedCard: ClientCard | 'none';
    minimizeCard: boolean;
};

const defaultCommonSetsStateProps: CommonSetsStateProps = {
    selectedCommonSetName: allCommonSets()[0],
    selectedCard: 'none',
    minimizeCard: false,
}

export class CommonSetsState {
    props: CommonSetsStateProps;
    constructor(props: Partial<CommonSetsStateProps>) {
        this.props = {...defaultCommonSetsStateProps, ...props};
    }

    public static toggleSelectedCommonSet(name: CommonSetName): CommonSetsStateAction {
        return {selectedCommonSetName: name, selectedCard: 'none'};
    }

    public static toggleSelectedCard(name: ClientCard | 'none'): CommonSetsStateAction {
        return {selectedCard: name};
    }

    public static toggleMinimizeCard(targetMinimizedCard: boolean): CommonSetsStateAction {
        return {minimizeCard: targetMinimizedCard};
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
        const commonSet: ClientCommonSet | undefined = getCommonSet(this.props.selectedCommonSetName);
        if (commonSet === undefined) return null;

        return <CommonSetRender commonSet={commonSet} minimizeCard={this.props.minimizeCard} onClickACard={onClickACard}/>;
    }
}
