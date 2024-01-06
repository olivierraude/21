/**
 * Class Hand
 */

import { Hand } from "./Hand.js"

export class Player {
    /**
     * @param {number} i
     * @param {array} gameDeck
     * @param {array} gameTable
     */

    constructor(i, gameDeck, gameTable) {
        this.joueur = `Player ${i}`
        this.gameDeck = gameDeck
        this.gameTable = gameTable

        this.createTable(i, this.joueur, this.gameDeck, this.gameTable)
    }

    // on pousse la carte dans le tableau
    createTable = (i, joueur, gameDeck, gameTable) => {

        this.gameTable.push(this.joueur)

        this.gameTurn(i, this.gameDeck, this.gameTable)
    }

    // On créée le tour de jeu
    gameTurn = (i, gameDeck, gameTable) => {

        gameTable.forEach(player => {
            // Pour chaque joueur on attribue une card du tableau gameDeck
            let hand = new Hand(i, gameDeck, gameTable)

            console.log(`Player ${i + 1}: ${hand.value} de ${hand.color} -> Point: ${hand.point}`)
        });
    }

}