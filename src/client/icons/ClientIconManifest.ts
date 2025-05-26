import IconNamesJson from '../../genfiles/iconNames.json';

export class ClientIconManifest {
    public static iconNames: Record<string, string> = {};

    public static initialize(): void {
        Object.entries(IconNamesJson as Record<string, string>).forEach(
            (iconEntry: [string, string]): void  => {
                ClientIconManifest.iconNames[iconEntry[0]] = iconEntry[1];
        });
    }
}

export function getIconByName(name: string): string | undefined {
    return ClientIconManifest.iconNames[name];
}

export function getHelpText(): string {
    let helpText: string = "";
    const iconNames = Object.entries(ClientIconManifest.iconNames);
    let lastIdx = 0;
    for (let i = 0; i < iconNames.length; i++){
        const entry = iconNames[i];
        if (i > 0) {
            if (iconNames[i][1].slice(0,5) !== iconNames[i-1][1].slice(0,5)) {
                lastIdx = i;
                helpText = helpText + "\n\n";
            } else if (lastIdx === i - 2 || iconNames[i][1].slice(0, 5) === "expan") {
                lastIdx = i;
                helpText = helpText + "\n";
            } else helpText = helpText + "   ";
        }
        helpText = helpText + entry[0] + "\\" + entry[0];
    }
    return helpText;
}

ClientIconManifest.initialize();
