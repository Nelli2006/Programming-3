
var side = 15;


function setup() {
    createCanvas(50 * side, 50 * side);
    background('#acacac');

    

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