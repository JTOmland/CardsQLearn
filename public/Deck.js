
function Deck() {
    
    this.cards = [];
    this.locationX = 50;
    this.locationY = 50;
    var cardsInDeck = 24;
    var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    for(var suit of suits) {
        for(var pow = 9; pow < cardsInDeck/suits.length + 9; pow++) {
            var card = new Card();
            card.name = pow + " " + suit;
            card.shortName = pow + suit[0];
            card.power = pow;
            card.suit = suit;
            this.cards.push(card)
            console.log("Card ", card);
        }
    }
}

Deck.prototype.randomCard = function() {
    return random(this.cards);
}