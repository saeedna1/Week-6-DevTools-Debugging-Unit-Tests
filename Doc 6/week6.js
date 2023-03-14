//Weedk 6 unit test
/*
//deck class have rank and suit
class Deck {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}


//class Card have: card. reset. shuffle

class Card{
  constructor(){
    this.card = [];
    this.reset();
    this.shuffle();
  }
  // reset method is to reset the 52 cards (suit and value )each time When refresh the browser
  reset(){
    this.card = [];
  // there are 52 cards in this array 4 suits and 13 values stored and Declared variable and array
    const suits = ['♥','♦','♠','♣'];
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  // iterating the suite and value in for loop
    for (let suit in suits) {
      for (let value in values) {
        this.card.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
  //in this shuffle method using m and i varibles to keep them on one line 
  shuffle(){
    const { card } = this;
    let m = card.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);
      [card[m], card[i]] = [card[i], card[m]];
    }
    return this;
  }
  // deal mehtod that will return one card and remove it automatic with method pop to changing cards
  deal(){
    return this.card.pop();
  }
}

  //output result will print 52 cards in the console.
const card = new Card();//
console.log(card.card); // prints an array of all 52 cards in the original order
card.reset(); //resets the deck



class Player {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.hand = [];
    this.score = 0;
  }

  dealDecks() {
    for (let i = 0; i < 26; i++) {
      this.player1.hand.push(this.deck.deal());
      this.player2.hand.push(this.deck.deal());
    }
  }
 //
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

let playCard = new Player();
console.log(playCard.hand);
*/