import { deck } from "./deck.js";
import { Game } from "./Game.js";
import { Hand } from "./Hand.js";
import { Player } from "./Player.js";


let playerNb = document.getElementById('players-select'),
    btn = document.querySelector('.btn'),
    container = document.querySelector('.container')

// console.log(playerNb);
// console.log(btn);
// console.log(container);

btn.addEventListener("click", () => {
    // On créée le nb de joueur (class joueur)
    let players = playerNb.value

    if (players != "") {
        removeContainer()
        // On créée un jeu de carte mélangé (class jeu)
        createDeck(players)
    } else {
        alert("Veuillez choisir un nombre de joueurs!")
    }
})

function removeContainer() {
    container.remove();
}

function createDeck(players) {
    // creation du set de jeu (tableau)
    let gameDeck = []
    let game = new Game(deck, gameDeck)
    // console.log(gameDeck)

    // On créée un joueur (class joueur)
    createPlayers(players, gameDeck)
}

function createPlayers(players, gameDeck) {
    let gameTable = []

    for (let i = 0; i < players; i++) {
        let player = new Player(i, gameDeck, gameTable)
    }
    console.log(gameTable)
}