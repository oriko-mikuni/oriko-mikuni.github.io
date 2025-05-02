export class CardEffectReuse {
    // format patch
    static readonly bumpUpTextBox: string = "^";
    // specific card name
    static readonly advance: string = "Choose: pay 3{material} to acquire {uncivilised}/{civilised} OR pay 5{material} to break through for {uncivilised}/{civilised}.";
    static readonly conquer: string = "Choose: pay 2{population} to acquire {region}/{tributary} OR pay 3{population} to break through for {region}/{tributary}.";

    static readonly unrest: string = "Choose: Pay 1{population} OR discard 2 cards OR pay 3{material}. If you do, return this card to the unrest pile.";
    static readonly setupUnrestL: string = "Setup: add to the unrest pile if the ";
    static readonly setupUnrestR: string = " are in play.";

    static readonly city: string = "Solstice: you MAY discard a card to choose: gain 1{material} OR gain 1{population} OR draw a card.";
    static readonly tradingCity: string = "Solstice: discard a card to choose: draw a card OR gain 1{material} OR pay 2{material} to gain 1{goods}.";
    static readonly metropolis: string = "Solstice: choose: gain 1{material} OR gain 1{population} OR draw a card.";
    static readonly harbourCity: string = "Solstice: choose: gain 1{goods} OR pay 1{goods} to draw a card per {ocean} you have in play (max 3).";

    // reusable words
    static readonly fourSuits: string = "{uncivilised}/{civilised}/{region}/{tributary}";

    // reusable sentences
    static readonly increaseHandSize1: string = "Passive: increase your hand size by 1.";
    static readonly knightGarrison: string = "You MAY garrison this card in a {region} to trigger that card's play effect.";
    static readonly selfHistory: string = "Put this card into your history.";
    static readonly selfExile: string = "Exile this card.";
    static readonly marketExile: string = "Exile a card from the market.";
    static readonly garrisonACard: string = "You MAY garrison a card.";
    static readonly takeOne: string = "Take one of those cards.";
    static readonly takeTopFame: string = "Take the top {fame} card.";
    static readonly drawTopFame: string = "Draw the top {fame} card.";
    static readonly unplayable: string = "Cannot be played.";
    static readonly thisCannotGarrison: string = "This card cannot be garrisoned.";
    static readonly cannotGarrison: string = "Cannot be garrisoned.";
    static readonly glory: Array<string> = [
        CardEffectReuse.thisCannotGarrison,
        "Abandon 3 {region} to look at the top 2 cards of the {fame} deck.",
        CardEffectReuse.takeOne
    ];
    static readonly prosperity: Array<string> = [
        "All players MAY draw 1 card.",
        "Choose: gain 1{material} per {production} OR gain 1{population} per {region} you have in play."
    ];
    static readonly stoneMask: Array<string> = [
        "Draw up to 3 cards if able.",
        "Then return a card to the top of your deck.",
    ];
}
