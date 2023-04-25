var socket = io();
var side = 15;


function setup() {
    createCanvas(45 * side, 45 * side);
    background('#acacac');
}

function changeColor(matrix) {
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

}

socket.on("Send matrix", changeColor);
