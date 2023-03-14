
//deck class object
class Deck {    
    constructor(cards = freshDeck()) { //frsh Deck is create and make cards combinations
        this.cards = cards
        this.suits = suits
    }
    get numberOfCards() {  //get number return the length of cards
        return this.cards.length
    }

    pop() {
        return this.cards.shift() // return cards by shifting from the top
    }

    push(){
     return this.cards.push(cards) // return cards by pushing from the deck

    }

    shuffle() {  //shuffle going to shuffle the card 
        for(let i = this.numberOfCards - 1; i > 0; i--) { //for loop create the exactly of value and suwaping wiht cards  
            const newIndex = Math.floor(Math.random() * (i + 1)) //random is from 0 to 1 gev us the random cards
            const oldValue = this.cards[newIndex] //newIdnex
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

// create cards object
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

const suits = ['♥','♦','♠','♣']; // decleard the suits of 
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']; // decleard the values
function freshDeck() {  //fresh Deck is create the combination of suits and values
    return suits.flatMap(suit => {  //flat map it takes all array in one single array insted of deffernt arrays
        return values.map(value => {  
            return new Card(suit, value)// return 
        })
    })
}
//const deck = new Deck()
//console.log(deck.cards)

// class player object
class Player {   
    constructor(player1,player2) {
        this.player1 = player1
        this.player2 = player2
    }
}

let player1, player2 // declared 2 player
startGame() // 
function startGame(){
    const deck = new Deck()
    deck.shuffle() //this make the cards shuffled random 
        

    const deckPoint = Math.ceil(deck.numberOfCards / 2);// ceil is divided 52 cards in 2 players 
    player1 = new Deck(deck.cards.slice(0, deckPoint)); // slice is give  player1 equal 26 cards from 0 to decpoint 26 cards
    player2 = new Deck(deck.cards.slice(deckPoint, deck.numberOfCards))//  slice is give player2 equal 26 cards

  
    console.log(player1)// output will be 26 cards for player1
    console.log(player2)// output will be 26 cards for player2

    
} 




