/**
 * Class Hand
 *  Cette classe renvoie une main à chaque joueur
 */

export class Hand {
    /**
     * @param {number} i
     * @param {array} gameDeck
     */

    constructor(i, gameDeck) {

        this.gameDeck = gameDeck

        let hand = this.gameDeck[i]

        return(hand)
    }
}