/**
 * Class Game
 *  Cette classe renvoie un jeu de carte mélangé
 */

import { Card } from "./Card.js";

export class Game {
    /**
     * @param {string} deck
     * @param {array} gameDeck
     */

    constructor(deck, gameDeck) {
        this.deck = deck;
        this.gameDeck = gameDeck;

        // creation d'une carte (objet)
        for (const color of this.deck.colors) {

            for (let value in this.deck.values) {

                let point = this.deck.values[value]

                // creation de l'objet card
                let card = new Card(color, value, point)
                // console.log(card)

                this.createDeck(card)
            }
        }
    }

    // on pousse la carte dans le tableau
    createDeck = (card) => {
        this.gameDeck.push(card)

        this.shuffleDeck()
    }

    // on mélange le tableau
    shuffleDeck = () => {

        let currentIndex = this.gameDeck.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.gameDeck[currentIndex], this.gameDeck[randomIndex]] = [
                this.gameDeck[randomIndex], this.gameDeck[currentIndex]];
        }
        return this.gameDeck
    }
}