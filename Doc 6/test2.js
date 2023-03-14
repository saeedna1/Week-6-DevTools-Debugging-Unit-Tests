//create deck class under constructor creatd cards
/*
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
    get numberOfCards() {
        return this.cards.length
    }
    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = math.random() * (i + 1)
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    startGame() {
        const deckPoint = Math.cell(numberOfCards / 2);
        playerDeck = new Player(deck.cards.slice());

    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    
}
const suits = ['♥','♦','♠','♣'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)

        })
    })
}
const deck = new Deck()
console.log(deck.cards)

*/






/*
// secnd ///22222222222222


class Deck {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
  
  getValue() {
    if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      return 10;
    } else if (this.rank === 'A') {
      return 11;
    } else {
      return parseInt(this.rank);
    }
  }
  
  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Card {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffle();
  }
  
  createDeck() {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (let rank of ranks) {
      for (let suit of suits) {
        this.cards.push(new Card(rank, suit));
      }
    }
    
  }
   
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  deal() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
  
  playCard() {
    return this.hand.pop();
  }
  
  addScore() {
    this.score++;
  }
  
  resetHand() {
    this.hand = [];
  }
  
  resetScore() {
    this.score = 0;
  }
}

class Game {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.deck = new Deck();
  }
  
  start() {
    this.dealCards();
    let round = 1;
    while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
      console.log(`Round ${round}:`);
      this.playTurn();
      round++;
    }
    this.displayScore();
    this.declareWinner();
  }
  
  dealCards() {
    for (let i = 0; i < 26; i++) {
      this.player1.hand.push(this.deck.deal());
      this.player2.hand.push(this.deck.deal());
    }
  }
  
  playTurn() {
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();
    console.log(`${this.player1.name} plays ${card1.toString()}`);
    console.log(`${this.player2.name} plays ${card2.toString()}`);
    const value1 = card1.getValue();
    const value2 = card2.getValue();
    if (value1 > value2) {
      console.log(`${this.player1.name} wins this round`);
      this.player1.addScore();
    } else if (value2 > value1) {
      console.log(`${this.player2.name} wins this round`);
      this.player2.addScore();
    } else {
      console.log(`It's a tie`);
    }
  }
  
  displayScore() {
    console.log(`Score: ${this.player1.name}: ${this.player1.score} - ${this.player2.name}`);
  }
}  

const card1 = new Player()
console.log(card1.game)
*/