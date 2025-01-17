export interface Units {
    material: number;
    population: number;
    progress: number;
    goods: number;
}

export namespace Units {
    export const EMPTY: Readonly<Units> = {
        get material() {
            return 0;
        },
        get population() {
            return 0;
        },
        get progress() {
            return 0;
        },
        get goods() {
            return 0;
        },
    }

    export const keys = Object.keys(EMPTY) as (keyof Units)[];

    export function isUnits(arg: any): arg is Units {
        if (typeof arg !== 'object') return false;
        return keys.every((key) => typeof arg[key] === 'number' && !isNaN(arg[key]));
    }

    export function of(partialUnits: Partial<Units>): Units {
        return {
            material: partialUnits.material === undefined ? 0 : partialUnits.material,
            population: partialUnits.population === undefined ? 0 : partialUnits.population,
            progress: partialUnits.progress === undefined ? 0 : partialUnits.progress,
            goods: partialUnits.goods === undefined ? 0 : partialUnits.goods,
        }
    }

    export function negative(units: Units): Units {
        const neg = (n: number) => n === 0 ? 0 : -n;

        return {
            material: neg(units.material),
            population: neg(units.population),
            progress: neg(units.progress),
            goods: neg(units.goods),
        }
    }

    export function isEmpty(u: Partial<Units> | undefined): boolean {
        if (u === undefined) return true;
        return (u.goods ?? 0) === 0 && (u.material ?? 0) === 0 && (u.population ?? 0) === 0 && (u.progress ?? 0) === 0;
    }

    export function partial(u: Partial<Units>): Partial<Units> {
        const partial: Partial<Units> = {};
        for (const key of keys) {
            const value = u[key];
            if (value) {
                partial[key] = value;
            }
        }
        return partial;
    }
}