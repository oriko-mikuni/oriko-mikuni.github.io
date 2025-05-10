import * as fs from 'fs';

class CardTsFileGenerator {
    public static cardManifest: Array<[string, string]> = [];
    public static defaultCardTsContent: string;
    public static makeTsFile(pathName: string): void {
        if (!fs.existsSync(pathName + 'cardManifest.ts') || !fs.existsSync(pathName + 'DefaultCard.ts'))
            return;

        CardTsFileGenerator.defaultCardTsContent = fs.readFileSync(pathName + 'DefaultCard.ts').toString();
        const readCardManifestString: string = fs.readFileSync(pathName + 'cardManifest.ts').toString();

        const regex: RegExp = /\[([^\]]+)]:\s*\{Factory: ([^}]+)}/g;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(readCardManifestString)) !== null) {
            const key: string = match[1].trim();
            const value: string = match[2].trim();
            CardTsFileGenerator.cardManifest.push([key, value]);
        }

        for (const [cardName, fileName] of CardTsFileGenerator.cardManifest) {
            console.log(cardName + ": " + fileName);
            const targetValue: string =
                CardTsFileGenerator.defaultCardTsContent
                    .replace("class DefaultCard", "class " + fileName)
                    .replace("name: CardName.DEFAULT", "name: " + cardName);
            fs.writeFileSync(pathName + fileName + ".ts", targetValue);
        }
    }
}

// CardTsFileGenerator.makeTsFile('src/server/cards/sassanids/');
