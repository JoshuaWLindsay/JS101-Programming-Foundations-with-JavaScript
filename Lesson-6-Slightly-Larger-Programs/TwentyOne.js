const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinAnd(array, spacing = ', ', otherOr = 'and') {
  let string;
  if (array.length <= 1) {
    string = array.join();
  } else if (array.length === 2) {
    string = array.join(` ${otherOr} `);
  } else {
    string = array.slice(0, array.length - 1).join(spacing) + 
    `${spacing}${otherOr} ${array[array.length - 1]}`;
  } 
  return string;
}

const playerHand = [];
const dealerHand = [];

function deck() {
  let suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  let face = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  
  let fullDeck = [];

  face.forEach(face => {
    suit.forEach(suit => {
      let card = {};
      card['face'] = face;
      card['suit'] = suit;
      card['value'] = face;
      if (card['value'] === 'Jack' || card['value'] === 'Queen' || card['value'] === 'King') {
        card['value'] = 10;
      } else if (card['value'] === 'Ace') {
        card['value'] = 11;
      }
      fullDeck.push(card);
    })
  })

  return fullDeck;
}

function shuffle(deck) {
  let length = deck.length;
  while (length) {
    let random = Math.floor(Math.random() * length--);
    let index = deck[length];
    deck[length] = deck[random];
    deck[random] = index;
  }

  return deck;
}

function deal(deck) {  
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  let playerCards = [];
  playerHand.forEach(card => {
    playerCards.push(`${card['face']} of ${card['suit']}`);
  })
  prompt(`Your cards are: ${joinAnd(playerCards)}`);

  let dealerCards = [];
  dealerHand.forEach(card => {
    dealerCards.push(`${card['face']} of ${card['suit']}`);
  })
  prompt(`Dealer's face-up card is: ${dealerCards[1]}`);
}

function handValue(hand) {
  let cardValues = hand.map(card => {
    return card['value'];
  });
  
  let sum = cardValues.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });

  while (cardValues.includes(11) && sum > 21) {
    let index = cardValues.findIndex(i => i === 11);
    cardValues[index] = 1;
    return sum = cardValues.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }

  return sum;
}

function playerTurn(deck) {
  while (handValue(playerHand) <= 21) {
    if (handValue(playerHand) === 21) {
      prompt(`You have TwentyOne!`)
      return false;
    }
    prompt('Would you like to hit? (y or n)');
    let answer = readline.question().toLowerCase();
    while (answer !== 'y' && answer !== 'n') {
      prompt(`Please enter either 'y' only or 'n' only.`);
      answer = readline.question().toLowerCase();
    }
    if (answer === 'y') {
      playerHand.push(deck.pop());
      let playerCards = [];
      playerHand.forEach(card => {
        playerCards.push(`${card['face']} of ${card['suit']}`);
      });
      prompt(`Your cards are: ${joinAnd(playerCards)}`);    
      prompt(`Your hand's value is ${handValue(playerHand)}`);
    }
    if (answer === 'n') {
      prompt(`Your hand's value is ${handValue(playerHand)}`);
      return false;
    }
    if (handValue(playerHand) > 21) {
      prompt(`You have a busted hand! (Value over 21)`)
      return false;
    }
  }
}

function dealerTurn(deck) {
  let dealerCards = [];
  dealerHand.forEach(card => {
    dealerCards.push(`${card['face']} of ${card['suit']}`);
  });

  if (handValue(playerHand) < 21) {

    prompt(`Dealer's cards are: ${joinAnd(dealerCards)}`);  
    prompt(`Dealer's hand value is ${handValue(dealerHand)}`);

    if (handValue(dealerHand) >= 17) {
      return false;
    }

    if (handValue(dealerHand) < 17) {
      prompt(`Dealer's hand value is less than 17; hit!`);
      dealerHand.push(deck.pop());
      dealerCards.push(
        `${dealerHand[dealerHand.length - 1]['face']} of ${dealerHand[dealerHand.length - 1]['suit']}`);
      prompt(`Dealer's cards are: ${joinAnd(dealerCards)}`);  
      prompt(`Dealer's hand value is ${handValue(dealerHand)}`);
    } 
    
    if (handValue(dealerHand) > 21) {
      prompt(`Dealer has a busted hand! (Value over 21)`);
      return false;
    }
  }
}

function declareWinner() {
  if ((handValue(playerHand) > handValue(dealerHand) && 
       handValue(playerHand) <= 21) ||
       handValue(dealerHand) > 21 ||
       (handValue(playerHand) === 21 && playerHand.length === 2)) {
    prompt(`You Win!`);
  } else if ((handValue(dealerHand) > handValue(playerHand) && 
              handValue(dealerHand) <= 21) || handValue(playerHand) > 21) {
    prompt(`Dealer Wins!`);
  } else if (handValue(playerHand) === handValue(dealerHand)) {
    prompt(`You and the dealer tied!`);
  }
}

let newDeck = deck();
shuffle(newDeck);

while (true) {
  prompt ('Welcome to TwentyOne!');

  playerHand.length = 0;
  dealerHand.length = 0;

  deal(newDeck);
  playerTurn(newDeck);
  dealerTurn(newDeck);
  declareWinner();
  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();
  if (answer === 'n') {
    prompt(`Thank you for playing!`);
    break;
  }
}
