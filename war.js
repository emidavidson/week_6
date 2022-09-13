
alert `Let's play War!`

const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const valueMap = {
    'K' : 13,
    'Q' : 12,
    'J' : 11,
    '10' : 10,
    '9' : 9,
    '8' : 8,
    '7' : 7,
    '6' : 6,
    '5' : 5,
    '4' : 4,
    '3' : 3,
    '2' : 2,
    'A' : 1
 }

class Player {
    constructor(name, deck, score) {
     this.name = name;
     this.deck = deck;
     this.score = score; 
    }
    
}
class Deck {
    constructor(card = createDeck()) {
        this.card = card;
    }

    get numberOfCards() {
        return this.card.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.card[newIndex];
            this.card[newIndex] = this.card[i];
            this.card[i] = oldValue;
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
    return suit.flatMap( suit => {
        return value.map(value => {
                return new Card(suit, value);
            
            
        })
    })
}

function startGame(){
    const deck = new Deck();
    deck.shuffle();

    const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
    const playerOne = new Player('Player One', []);
    playerOne.deck = new Deck(deck.card.slice(0, deckMidPoint));
    const playerTwo = new Player('Player Two', []);
    playerTwo.deck = new Deck(deck.card.slice(deckMidPoint, deck.numberOfCards));

    console.log(playerOne.deck);
    console.log(playerTwo.deck);


alert ('Player One vs Player Two');


playerOneCard = 0;
playerTwoCard = 0;
playerOne.score = 0;
playerTwo.score = 0;

for(let i = 0; i < 26; i++){
 playerOneCard = playerOne.deck[i];
 console.log('Player One: ' + playerOneCard);

 playerTwoCard = playerTwo.deck[i];
 console.log('Player Two: ' + playerTwoCard);

 if(valueMap[playerOneCard] > valueMap[playerTwoCard]){
playerOne.score++;
 } else if (valueMap[playerOneCard] < valueMap[playerTwoCard]){
playerTwo.score++;
 } else {}
 console.log('Player One Points: ' + playerOne.score);
 console.log('Player Two Points: ' + playerTwo.score);
}

console.log('Total for Player One: ' + playerOne.score);
console.log('Total for Player Two: ' + playerTwo.score);

if (playerOne.score > playerTwo.score) {
    alert ( `Winner: Player One`);
    } else if (playerTwo.score > playerOne.score) {
        alert (`Winner: Player Two `);
    }
} 
startGame();
