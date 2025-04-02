import IconNamesJson from '../../genfiles/iconNames.json';

export class IconNamesManifest {
    public static iconNames: Record<string, {category: string, value: string}> = {};

    public static initialize(): void {
        Object.entries(IconNamesJson as Record<string, {category: string, value: string}>).forEach(
            (iconEntry: [string, {category: string, value: string}]): void  => {
                IconNamesManifest.iconNames[iconEntry[0]] = iconEntry[1];
        })
    }
}

export function getIconByName(name: string): {category: string, value: string} | undefined {
    return IconNamesManifest.iconNames[name];
}

IconNamesManifest.initialize();
