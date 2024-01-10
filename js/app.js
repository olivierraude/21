import { deck } from "./deck.js";
import { Game } from "./Game.js";
import { Player } from "./Player.js";
import { Hand } from "./Hand.js";

let playerNb = document.getElementById('players-select'),
    btn = document.querySelector('.btn'),
    section = document.querySelector('section'),
    container = document.querySelector('.container')


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
    
    console.log(gameDeck)
    // On créée un joueur (class joueur)
    // createPlayers(players, gameDeck)
    createHand(players, gameDeck)
} // On créée un tableau de joueurs


function createPlayers(players, gameDeck) {
    let gameTable = []
    let index = []
    
    for (let i = 0; i < players; i++) {
        // let player = new Player(i, section, gameDeck, gameTable, players)
        let player = new Player(i, section, gameTable, players)
        // console.log(index)
    }

    console.log(gameTable)
    createHand(gameDeck)
    // createHand(index, gameDeck, gameTable)
} // On créée une main


function createHand(players, gameDeck) {
    let index = 0
    
    for (let i = index; i < players; i++) {
        // Pour chaque joueur on attribue une card du tableau gameDeck
    let hand = new Hand(i, gameDeck)
    // On créée une fenêtre de jeu pour le joueur
    createWindow(i, hand)
    }
} // On créée la fenêtre de jeu dans section


function createWindow(i, hand) {
    
    // création des éléments HTML
    let gameWindow = document.createElement('div')
    let playerInfo = document.createElement('p')

    playerInfo.innerHTML = `Player ${i + 1}: ${hand.value} de ${hand.color} -> Point: ${hand.point}`

    section.appendChild(gameWindow)
    gameWindow.appendChild(playerInfo)

    // On ajoute la classe CSS hidden aux div concernées
    if (i > 0) {
        gameWindow.classList.add('hidden')
    }

    // console.log(hand.point)
    getPoint(i, hand.point)
} // On enregistre les points de chaque joueur


function getPoint(i, point) {

    // On modifie les point dans player 
    console.log(i, point)
}

// Au clic du bouton on enregistre les points de chaque joueur & on modifie les classes pour faire apparaitre la fenêtre suivante

// Au tours suivants
// Le joueur choisit une carte
// 