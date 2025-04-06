import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../common/cards/CardStartingLocation";
import {CardStateSymbol} from "../../common/cards/CardStateSymbol";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon";
import {Resources} from "../../common/Resources";
import fs from "fs";

class IconNameProcessor {
    public static json: Record<string, string> = {};
    public static makeJson(): void {
        this.processIconEnumType("header", CardHeaderIcon);
        this.processIconEnumType("location", CardStartingLocation);
        this.processIconEnumType("state", CardStateSymbol);
        this.processIconEnumType("suit", CardSuitIcon);
        this.processIconEnumType("type", CardTypeIcon);
        this.processIconEnumType("resource", Resources);
    }

    public static processIconEnumType<T extends Record<string | number, string | number>>
    (category: string, iconEnum: T): void {
        Object.entries(iconEnum).forEach((entry: [string | number, string | number]): void => {
            IconNameProcessor.json["{" + entry[1] + "}"] = category + "-" + entry[1].toString();
        });
    }
}

export function exportIconNameRendering() {
    if (!fs.existsSync('src/genfiles')) {
        fs.mkdirSync('src/genfiles');
    }

    IconNameProcessor.makeJson();

    fs.writeFileSync('src/genfiles/iconNames.json', JSON.stringify(IconNameProcessor.json, null, 2));

}
