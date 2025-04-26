import {ClientCard} from "../../common/cards/ClientCard";
import {ICard} from "../cards/ICard";
import * as fs from 'fs';
import {ALL_MODULE_MANIFEST} from '../cards/AllCards';
import {CardManifest, cardManifestValues, ModuleManifest} from '../cards/ModuleManifest';
import {exportIconNameRendering} from "./export_icon_name_rendering";
import {GameModule} from "../../common/cards/GameModule";
import {Player} from "../Player";
import {Game} from "../Game";

class CardProcessor {
    public static json: Array<ClientCard> = [];
    public static fakeGame: Game;
    public static fakePlayer: Player;
    public static makeJson() {
        this.fakeGame = new Game(1);
        this.fakePlayer = this.fakeGame.players[0];
        ALL_MODULE_MANIFEST.forEach(this.processManifest);
        this.fakePlayer.getVictoryPoint();
    }

    private static processManifest(manifest: ModuleManifest) {
        for (const cardManifest of [manifest.commonCards, manifest.nationCards]) {
            CardProcessor.processDeck(cardManifest, manifest.module);
        }
    }

    private static processDeck(cardManifest: CardManifest<ICard>, module: GameModule) {
        for (const factory of cardManifestValues(cardManifest)) {
            CardProcessor.processCard(new factory.Factory(), module);
        }
    }

    private static processCard(
        card: ICard, module: GameModule) {
        const clientCard: ClientCard = {
            cardNumber: card.cardNumber,
            developmentCost: card.developmentCost,
            developmentCostString: card.developmentCostString || [],
            effectText: card.effectText || [],
            expansion: card.expansion,
            headerIcon: card.headerIcon,
            name: card.name,
            nationColour: card.nationColour,
            playerCount: card.playerCount,
            startingLocation: card.startingLocation,
            stateSymbol: card.stateSymbol,
            suit: card.suit,
            typeIcon: card.typeIcon,
            victoryPoints: card.victoryPoints,
            victoryPointsString: card.victoryPointsString,
            gameModule: card.gameModule ?? module
        };
        // add all condition/variable cards to the hand of a fake player, ensuring scoring functions are overridden correctly.
        if (typeof card.victoryPoints === 'string') {
            this.fakePlayer.handCards.push(card);
        }
        CardProcessor.json.push(clientCard);
    }
}

if (!fs.existsSync('src/genfiles')) {
    fs.mkdirSync('src/genfiles');
}

CardProcessor.makeJson();

fs.writeFileSync('src/genfiles/cards.json', JSON.stringify(CardProcessor.json, null, 2));

exportIconNameRendering();
