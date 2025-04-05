export interface Units {
    progress: number;
    goods: number;
    material: number;
    population: number;
}

type TypedEntry<T extends PropertyKey, U> = [T, U];
type TypedEntries<T> = Array<TypedEntry<keyof T, T[keyof T]>>;
function typedFromEntries<T>(entries: TypedEntries<T>): T {
    return Object.fromEntries(entries) as T;
}

export class UnitsUtils {
    static EMPTY: Readonly<Units> = {
        get progress(): number { return 0; },
        get goods(): number { return 0; },
        get material(): number { return 0; },
        get population(): number { return 0; }
    }

    static keys: (keyof Units)[] = Object.keys(this.EMPTY) as (keyof Units)[];

    // static isUnits(arg: any): arg is Units {
    //     if (typeof arg !== 'object') return false;
    //     return this.keys.every((key: keyof Units): boolean =>
    //         typeof arg[key] === 'number' && !isNaN(arg[key])
    //     );
    // }

    static of(partialUnits: Partial<Units>): Units {
        return typedFromEntries(
            this.keys.map(
                (key: keyof Units): [keyof Units, number] =>
                    [key, partialUnits[key] === undefined ? 0 : partialUnits[key]]
            )
        );
    }

    static negative(units: Units): Units {
        const neg: (n: number) => number =
            (n: number): number => n === 0 ? 0 : -n;

        return typedFromEntries(
            this.keys.map(
                (key: keyof Units): [keyof Units, number] =>
                    [key, neg(units[key])]
            )
        )
    }

    static isEmpty(units: Partial<Units> | undefined): boolean {
        if (units === undefined) return true;
        return this.keys.every((key: keyof Units): boolean =>
            units[key] === undefined ? true : units[key] === 0
        )
    }

    static toString(units: Partial<Units> | undefined): string | undefined {
        if (units === undefined) return undefined;
        let returnValue: string = "";
        this.keys.forEach((key: keyof Units): void => {
            if (units[key] !== undefined && units[key] !== 0) {
                if (returnValue !== "") returnValue = returnValue + ", ";
                returnValue = returnValue + "{" + key + "}x" + units[key];
            }
        });
        return returnValue === "" ? undefined : returnValue;
    }
}
