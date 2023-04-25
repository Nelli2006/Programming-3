let LivingCreature = require("./LivingCreature");
module.exports = class AddGrassEater extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.directions = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length)];
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]///////2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        // else {
        //     this.die()
        // }
    }
    create() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length)];
        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            if (grassEaterArr.length <= 15) {
                let cr = new GrassEater(newX,newY)
                grassEaterArr.push(cr)
            }
        }

    }
}