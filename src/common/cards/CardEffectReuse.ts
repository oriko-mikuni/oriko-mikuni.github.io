export enum CardEffectReuse {
    // format patch
    bumpUpTextBox = "^",
    // specific card name
    advance = "Choose: pay 3{material} to acquire {uncivilised}/{civilised} OR pay 5{material} to break through for {uncivilised}/{civilised}.",
    conquer = "Choose: pay 2{population} to acquire {region}/{tributary} OR pay 3{population} to break through for {region}/{tributary}.",

    unrest = "Choose: Pay 1{population} OR discard 2 cards OR pay 3{material}. If you do, return this card to the unrest pile.",
    setupUnrestL = "Setup: add to the unrest pile if the ",
    setupUnrestR = " are in play.",

    city = "Solstice: you MAY discard a card to choose: gain 1{material} OR gain 1{population} OR draw a card.",
    metropolis = "Solstice: choose: gain 1{material} OR gain 1{population} OR draw a card.",
    harbourCity = "Solstice: choose: gain 1{goods} OR pay 1{goods} to draw a card per {ocean} you have in play (max 3).",

    // reusable words
    fourSuits = "{uncivilised}/{civilised}/{region}/{tributary}",

    // reusable sentences
    increaseHandSize1 = "Passive: increase your hand size by 1.",
    knightGarrison = "You MAY garrison this card in a {region} to trigger that card's play effect.",
    selfHistory = "Put this card into your history.",
    selfExile = "Exile this card.",
    marketExile = "Exile a card from the market.",
    garrisonACard = "You MAY garrison a card.",
    takeOne = "Take one of those cards.",
    takeTopFame = "Take the top {fame} card.",
    drawTopFame = "Draw the top {fame} card.",
    unplayable = "Cannot be played.",
    thisCannotGarrison = "This card cannot be garrisoned.",
    cannotGarrison = "Cannot be garrisoned."
}

export class EffectReuseMultipleSentences {
    static readonly glory: Array<string> = [
        CardEffectReuse.thisCannotGarrison,
        "Abandon 3 {region} to look at the top 2 cards of the {fame} deck.",
        CardEffectReuse.takeOne
    ]
    static readonly prosperity = [
        "All players MAY draw 1 card.",
        "Choose: gain 1{material} per {production} OR gain 1{population} per {region} you have in play."
    ]
    static readonly stoneMask = [
        "Draw up to 3 cards if able.",
        "Then return a card to the top of your deck.",
    ]
}
