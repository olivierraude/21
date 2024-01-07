/**
 * Class Player
 */

import { Hand } from "./Hand.js"

export class Player {
    /**
     * @param {number} i
     * @param {array} gameDeck
     * @param {array} gameTable
     * @param {array} g
     * @param {object} hand
     */

    constructor(i, players, gameDeck, gameTable, hand) {
        this.joueur = `Player ${i}`
        this.players = players
        this.gameDeck = gameDeck
        this.gameTable = gameTable
        this.hand = hand

        this.createTable(i, this.joueur, this.players, this.gameDeck, this.gameTable)
    }

    // on pousse la carte dans le tableau
    createTable = (i, joueur, players, gameDeck, gameTable) => {
        for (let player of players) {

            this.gameTable.push(this.joueur)

            this.gameTurn(i, this.gameDeck)
        }
    }

    // On créée le tour de jeu
    gameTurn = (i, gameDeck) => {

        // Pour chaque joueur on attribue une card du tableau gameDeck
        this.hand = new Hand(i, gameDeck)

        // console.log(`Player ${i + 1}: ${this.hand.value} de ${this.hand.color} -> Point: ${this.hand.point}`)
        console.log(this.hand)
        return (this.hand)
    }
}