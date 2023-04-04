class Lightning {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y],
        ];
    }

    chooseCell() {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);
            }

        }
        return found;
    }
    eat() {
        let emptyCelss = this.chooseCell()
        let newCell = random(emptyCelss)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]///////2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[newY][newX] == 3) {
                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[newY][newX] == 4) {
                for (var i in hunterArr) {
                    if (newX == hunterArr[i].x && newY == hunterArr[i].y) {
                        hunterArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[newY][newX] == 5) {
                for (var i in waterArr) {
                    if (newX == waterArr[i].x && newY == waterArr[i].y) {
                        waterArr.splice(i, 1);
                        break;
                    }
                }
            }

        } else {
            this.move()
        }

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
        if (this.x == matrix[0].length - 1) {
            this.die()
        }

    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in lightningArr) {
            if (this.x == lightningArr[i].x && this.y == lightningArr[i].y) {
                lightningArr.splice(i, 1);
                break;
            }
        }
    }
}
