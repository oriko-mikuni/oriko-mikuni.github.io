import {Dispatch, SetStateAction} from "react";

export type ReactState<T> = [T, Dispatch<SetStateAction<T>>];

export function setAllState<T>(stateGroup: Array<ReactState<T>>, newState: T): void {
    stateGroup.forEach((state: ReactState<T>): void => state[1](newState))
}
