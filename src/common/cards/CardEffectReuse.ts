enum CardEffectReuse {
    // specific card name
    advance = "Choose: pay 3{material} to acquire {uncivilised}/{civilised}\n" +
        "OR pay 5{material} to break through for {uncivilised}/{civilised}.",
    conquer = "Choose: pay 2{population} to acquire {region}/{tributary}\n" +
        "OR pay 3{population} to break through for {region}/{tributary}.",
    prosperity = "All players MAY draw 1 card.\n" +
        "Choose: gain 1{material} per {production}\n" +
        "OR gain 1{population} per {region} you have in play.\n",
    glory =  "This card cannot be garrisoned.\n" +
        "Abandon 3 {region} to look at the\ntop 2 cards of the {fame} deck.\n" +
        "Take one of those cards.",

    unrest = "Choose: Pay 1{population} OR discard 2 cards\n" +
        "OR pay 3{material}. If you do, return this card\n" +
        "to the unrest pile.",
    setupUnrestL = "Setup: add to the unrest pile if the ",
    setupUnrestR = " are in play.\n",

    city = "Solstice: you MAY discard a card to\n" +
        "choose: gain 1{material} OR gain 1{population}\n" +
        "OR draw a card.",
    metropolis = "Solstice: choose: gain 1{material}\n" +
        "OR gain 1{population} OR draw a card.",
    development = "Choose: develop OR pay 2{material} to\n" +
        "acquire {uncivilised}/{civilised}.",
    mountedArchers = "Exhaust: when another player plays\n" +
        "an {attack}, you MAY exhaust this card\n" +
        "to avoid its effects (even if it's\n" +
        "another player's turn).",
    writingSystem = "Exhaust: put a card from your discard\n" +
        "pile into your history to draw a card.",
    // phrases
    fourSuits = "{uncivilised}/{civilised}/{region}/{tributary}",
    selfHistory = "Put this card into your history.",
    garrisonACard = "You MAY garrison a card."
}

export default CardEffectReuse;
