export default class Player {

    constructor(symbol, name = '') {
        this.name = name;
        this.symbol = symbol;
    }

    /**
     * Returns players name
     * @retun Players name
     */
    name() {
        return this.name;
    }

    /**
     * Returns players representaion with a symbol (X or O)
     * @retun Player symbol
     */
    symbol() {
        return this.symbol;
    }
}