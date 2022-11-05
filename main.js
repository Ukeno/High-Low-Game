/*** Sends to html h2/p tags ***/
let cardHTML = document.getElementById("card");
let scoreHTML = document.getElementById("score");
let resultHTML = document.getElementById("result");

/*** Create cards ***/
const suits = ["♠", "♥", "♣", "♦"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

/***  Create Deck combine suit and value ***/
let deck = []
function createDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            cardValue = values[x]
            cardSuit = suits[i]
            let weight = parseInt(cardValue);
            if (cardValue === "J" || cardValue === "Q" || cardValue === "K") {
                weight = 10;
            } else if (cardValue === "A") {
                weight = 11;
            }

            card = document.createElement('div')
            card.classList.add('card')

            let h2Element = document.createElement('h2')
            h2Element.setAttribute('id', 'cardValue')
            h2Element.innerHTML = cardValue
            card.append(h2Element)

            let h2Element1 = document.createElement('h2')
            h2Element1.setAttribute('id', 'cardSuit')
            h2Element1.innerHTML = cardSuit
            card.append(h2Element1)

            let h2Element2 = document.createElement('h2')
            h2Element2.setAttribute('id', 'cardWeight')
            h2Element2.innerHTML = weight
            card.append(h2Element2)

            deck.push(card)
        }
    }
}

/*** Shuffle so deck not sequential ***/
function shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
        let x = Math.floor(Math.random() * deck.length);
        let temp = deck[i]
        deck[i] = deck[x]
        deck[x] = temp
    }
}

/*** Game start ***/
let playerTotal = 0

function startGame() {
    createDeck()
    shuffle(deck)
}

startGame()
/***  ***/
function getValue(card) {
    data = card.childNodes[2].innerHTML
    return parseInt(data)
}
/*
/*** Starts count at 0| Generates new card | Prints to data to html ***/
let numQuestionsAsked = 1; 
let numCorrect = 0;

let previousCardValue = 0
let randomNumber = 0; 

function resetCardGame() {
    previousCard = generateCard();
    previousCardValue = getValue(previousCard)

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
    return previousCardValue
}

/*** Compare cards ***/
function setPreviousCard(newCard) {
    previousCard = newCard
    previousCardValue = getValue(previousCard)
    return previousCardValue
}

/*** Submit ***/
function submitGuess(highLowGuess) {
    let newCard = generateCard()
    let correctGuess = guessCard(highLowGuess, newCard);
    let hand = document.getElementById('Hand')
    hand.firstChild.remove()
    updateScores(correctGuess);
    modifyCardGameHTML(correctGuess);
    setPreviousCard(newCard);
}
/*** Generates new card ***/
function generateCard() {
    randomNumber = 0;
    let randomCard = 0;
    for (let i = 0; i < 1; i++) {
        randomCard = deck.pop()
        randomNumber = getValue(randomCard)
        let Hand = document.getElementById('Hand')
        playerTotal += randomNumber
        Hand.append(randomCard)
    }
    return randomNumber
}
/*** previousCard ? ***/
function guessCard(highLowGuess, newCard) {
    let correctGuess;

    if (highLowGuess === "Higher") {
        if (newCard > previousCard) {
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else if (highLowGuess === "Lower") {
        if (newCard < previousCard) {
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else {
        correctGuess = false;
    }

    return correctGuess;
}
/*** Score count ***/
function updateScores(correctGuess) {
    if (correctGuess) {
        numCorrect++;
    }

    numQuestionsAsked++;
}
/*** Loop for text in html ***/
function modifyCardGameHTML(correctGuess) {
    let resultString = "";

    if (correctGuess) {
        resultString = "Correct";
    } else resultString = "Incorrect";

    resultHTML.innerText = "You were: " + resultString;
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}
/*** Rests after every submit ***/
resetCardGame();


