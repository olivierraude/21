/**
 * Class Card
 */

export class Card {
    /**
     * @param {string} color
     * @param {string} value
     * @param {number} point
     */

    constructor(color, value, point) {

        this.color = color;
        this.value = value;
        this.point = point;

        return (this.color, this.value, this.point)
    }
}