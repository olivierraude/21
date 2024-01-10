/**
 * Class Player
 *  Cette classe renvoie un tableau de joueurs
 */

export class Player {
    /**
     * @param {number} index
     * @param {HTMLElement} parent - Élément qui reçoit le contenu
     * @param {array} gameTable
     * @param {number} players
     */

    constructor(index, parent, gameTable, players) {
        this.index = index
        this.parent = parent
        this.gameTable = gameTable
        this.players = players

        this.createTable(index, this.gameTable)
    }

    // on pousse le joueur dans le tableau
    createTable = (index, gameTable) => {

        this.gameTable.push(`Player ${index+1}`)

        // this.createHand(index, this.gameDeck)
        return(index, this.gameDeck, this.gameTable)   
    }
}