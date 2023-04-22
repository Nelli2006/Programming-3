let LivingCreature = require("./LivingCreature");

module.exports = class Water extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.directions = [];

    }

    giveEnergy() {
        this.energy++
    }
}