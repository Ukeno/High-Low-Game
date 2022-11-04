const suits = ["♠", "♥", "♣", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
        let x = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[x];
        deck[x] = temp;
    }
}

let deck = [];
function createDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            cardValue = values[x];
            cardSuit = suits[i];
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


