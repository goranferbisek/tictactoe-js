export default class Player {

    constructor(name = 'X', symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    name() {
        return this.name;
    }

    symbol() {
        return this.symbol;
    }
}