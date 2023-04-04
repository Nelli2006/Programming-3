function generateMatrix(matrLeng, gr, grEat, pred, hunt, wat, lig, add) {
    let matrix = [];
    for (let i = 0; i < matrLeng; i++) {
        matrix.push([]);
        for (let j = 0; j < matrLeng; j++) {
            matrix[i].push(0);

        }

    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }

    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }

    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }

    }
    for (let i = 0; i < hunt; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }

    }
    for (let i = 0; i < wat; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }

    }
    for (let i = 0; i < lig; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][0] == 0) {
            matrix[y][0] = 6
        }

    }
    for (let i = 0; i < wat; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }
    return matrix
}
let matrix = generateMatrix(50, 18, 10, 10, 8, 5, 5, 4)
var side = 15;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let hunterArr = [];
let waterArr = [];
let lightningArr = [];
let addGrassEaterArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            } else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            } else if (matrix[y][x] == 4) {
                let gr = new Hunter(x, y)
                hunterArr.push(gr)
            } else if (matrix[y][x] == 5) {
                let gr = new Water(x, y)
                waterArr.push(gr)
            } else if (matrix[y][x] == 6) {
                let gr = new Lightning(x, y)
                lightningArr.push(gr)
            } else if (matrix[y][x] == 7) {
                let gr = new AddGrassEater(x, y)
                addGrassEaterArr.push(gr)
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("#90EE90");
            } else if (matrix[y][x] == 5) {
                fill("blue");
            } else if (matrix[y][x] == 6) {
                fill("orange");
            } else if (matrix[y][x] == 7) {
                fill("pink");
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat()
    }
    for (let i = 0; i < hunterArr.length; i++) {
        hunterArr[i].eat()
    }
    for (let i = 0; i < waterArr.length; i++) {
        waterArr[i].giveEnergy()
    }
    for (let i = 0; i < lightningArr.length; i++) {
        lightningArr[i].eat()
    }
    for (let i = 0; i < addGrassEaterArr.length; i++) {
        addGrassEaterArr[i].move()
        addGrassEaterArr[i].create()
    }
}