
alert `*** Let's play War! ***`

const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


class Deck {
    constructor(card = createDeck()) {
        this.card = card    
    }

    get numberOfCards() {
        return this.card.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.card[newIndex]
            this.card[newIndex] = this.card[i]
            this.card[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function createDeck() {
    return suit.flatMap(suit => {
        return value.map(value => {
            return new Card(suit, value)
        })
    })
}

let playerOneDeck, playerTwoDeck

function startGame(){
    const deck = new Deck();
    deck.shuffle();

    const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
    playerOneDeck = new Deck(deck.card.slice(0, deckMidPoint));
    playerTwoDeck = new Deck(deck.card.slice(deckMidPoint, deck.numberOfCards));

    console.log(playerOneDeck);
    console.log(playerTwoDeck);


}


console.log(startGame());




 