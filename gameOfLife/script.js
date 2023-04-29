var socket = io();
var side = 20;


function setup() {
    createCanvas(35 * side, 35 * side);
    background('#acacac');
}

socket.on("Winter", function(data){
    weather = data;
})
socket.on("Spring", function(data){
    weather = data;
})
socket.on("Summer", function(data){
    weather = data;
})
socket.on("Autumn", function(data){
    weather = data;
})

var weather = "spring";
function changeColor(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if(weather == "spring"){
                    fill("#2E8B57")
                }else if( weather == "summer"){
                    fill("darkgreen")
                }else if(weather == "winter"){
                    fill("#fff");
                }else if(weather == "autumn"){
                    fill("#FFAA33");
                }
                
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

function AddGrass(){
    socket.emit("addGrass")
}
function AddGrasseater(){
    socket.emit("addGrasseater")
}
function AddPredator(){
    socket.emit("addPredator")
}
function AddHunter(){
    socket.emit("addHunter")
}
function AddWater(){
    socket.emit("addWater")
}
function AddLightning(){
    socket.emit("addLightning")
}
function KillAll(){
    socket.emit("killAll")
}
function Winter(){
    socket.emit("winter");
}
function Spring(){
    socket.emit("spring");
}
function Summer(){
    socket.emit("summer");
}
function Autumn(){
    socket.emit("autumn");
}