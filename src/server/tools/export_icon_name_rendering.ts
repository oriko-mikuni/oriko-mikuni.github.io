import {CardHeaderIcon} from "../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../common/cards/CardStartingLocation";
import {CardStateIcon} from "../../common/cards/CardStateIcon";
import {CardSuitIcon} from "../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../common/cards/CardTypeIcon";
import {Resources} from "../../common/Resources";
import fs from "fs";
import {CardExpansion} from "../../common/cards/CardExpansion";

class IconNameProcessor {
    static json: Record<string, string> = {};
    public static makeJson(): void {
        this.processIconEnumType("header", CardHeaderIcon, CardHeaderIcon.NO_HEADER);
        this.processIconEnumType("location", CardStartingLocation, CardStartingLocation.DEFAULT);
        this.processIconEnumType("state", CardStateIcon);
        this.processIconEnumType("suit", CardSuitIcon);
        this.processIconEnumType("type", CardTypeIcon);
        this.processIconEnumType("resource", Resources);
        this.processIconEnumType("expansion", CardExpansion, CardExpansion.NONE);

        this.processSingleIcon("vp", "variable");
    }

    static processIconEnumType<T extends Record<string | number, string | number>>
    (category: string, iconEnum: T, exclude?: string | number): void {
        Object.entries(iconEnum).forEach((entry: [string | number, string | number]): void => {
            if (entry[1] !== exclude) this.processSingleIcon(category, entry[1].toString());
        });
    }

    static processSingleIcon(category: string, iconName: string): void {
        this.json["{" + iconName + "}"] = category + "-" + iconName;
    }
}

export function exportIconNameRendering() {
    if (!fs.existsSync('src/genfiles')) {
        fs.mkdirSync('src/genfiles');
    }

    IconNameProcessor.makeJson();

    fs.writeFileSync('src/genfiles/iconNames.json', JSON.stringify(IconNameProcessor.json, null, 2));
}
