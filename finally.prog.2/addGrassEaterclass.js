class AddGrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        let emptyCelss = this.chooseCell(0)
        let newCell = random(emptyCelss)
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
        let newCell = random(emptyCelss)
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