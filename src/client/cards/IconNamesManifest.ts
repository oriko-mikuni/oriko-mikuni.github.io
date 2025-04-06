import IconNamesJson from '../../genfiles/iconNames.json';

export class IconNamesManifest {
    public static iconNames: Record<string, string> = {};

    public static initialize(): void {
        Object.entries(IconNamesJson as Record<string, string>).forEach(
            (iconEntry: [string, string]): void  => {
                IconNamesManifest.iconNames[iconEntry[0]] = iconEntry[1];
        });
    }
}

export function getIconByName(name: string): string | undefined {
    return IconNamesManifest.iconNames[name];
}

IconNamesManifest.initialize();
