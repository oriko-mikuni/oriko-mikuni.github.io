enum CardEffectReuse {
    // specific card name
    ADVANCE = "Choose: pay 3{material} to acquire {uncivilised}/{civilised}\n" +
        "OR pay 5{material} to break through for {uncivilised}/{civilised}.",
    CONQUER = "Choose: pay 2{population} to acquire {region}/{tributary}\n" +
        "OR pay 3{population} to break through for {region}/{tributary}.",
    PROSPERITY = "All players MAY draw 1 card.\n" +
        "Choose: gain 1{material} per {production}\n" +
        "OR gain 1{population} per {region} you have in play.\n",
    GLORY =  "This card cannot be garrisoned.\n" +
        "Abandon 3 {region} to look at the\ntop 2 cards of the {fame} deck.\n" +
        "Take one of those cards.",

    UNREST = "Choose: Pay 1{population} OR discard 2 cards\n" +
        "OR pay 3{material}. If you do, return this card\n" +
        "to the unrest pile.",
    SETUP_UNREST_L = "Setup: add to the unrest pile if the ",
    SETUP_UNREST_R = " are in play.\n",

    CITY = "Solstice: you MAY discard a card to\n" +
        "choose: gain 1{population} OR gain 1{material}\n" +
        "OR draw a card.",
    METROPOLIS = "Solstice: choose: gain 1{material}\n" +
        "OR gain 1{population} OR draw a card.",
    // phrases
    FOUR_SUITS = "{uncivilised}/{civilised}/{region}/{tributary}",
    SELF_HISTORY = "Put this card into your history.",
}

export default CardEffectReuse;
