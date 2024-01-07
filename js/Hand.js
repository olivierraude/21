/**
 * Class Hand
 */

export class Hand {
    constructor(i, gameDeck, hand) {
        /**
         * @param {number} i
         * @param {array} gameDeck
         * @param {object} hand
         */

        this.gameDeck = gameDeck
        this.hand = hand

        this.hand = this.gameDeck[i]
        console.log(this.hand)
        return (this.hand)
    }
}