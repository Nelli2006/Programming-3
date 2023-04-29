var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log('server is run');
})
//matrix generator
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
    for (let i = 0; i < add; i++) {
        let x = Math.floor(Math.random() * matrLeng)
        let y = Math.floor(Math.random() * matrLeng)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }
    return matrix
}
matrix = generateMatrix(45, 18, 10, 10, 8, 5, 4, 4);

io.sockets.emit("Send matrix", matrix);


//arrays
grassArr = [];
grassEaterArr = [];
predatorArr = [];
hunterArr = [];
waterArr = [];
lightningArr = [];
addGrassEaterArr = [];

//modules
Grass = require("./grassclass");
GrassEater = require("./grasseaterclass");
Predator = require("./predatorclass");
Hunter = require("./hunterclass");
Water = require("./waterclass");
Lightning = require("./lightningclass");
AddGrassEater = require("./addGrassEaterclass");

//object generation

function createObject() {
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
                let gr = new AddGrassEater(x,y)
                addGrassEaterArr.push(gr)
            }
        }
    }
    io.sockets.emit("Send matrix", matrix);
}


function game() {
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

    io.sockets.emit("Send matrix", matrix);
}

setInterval(game, 300);

function KillAll(){
    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    hunterArr = [];
    waterArr = [];
    lightningArr = [];
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddGrass(){
    for(var i = 0; i < 25; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 1;
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddGrasseater(){
    for(var i = 0; i < 25; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 2;
            var grEat = new GrassEater(x, y);
            grassEaterArr.push(grEat);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddPredator(){
    for(var i = 0; i < 15; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 3;
            var pred = new Predator(x, y);
            predatorArr.push(pred);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddHunter(){
    for(var i = 0; i < 15; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 4;
            var hunt = new Hunter(x, y);
            hunterArr.push(hunt);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddWater(){
    for(var i = 0; i < 7; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 5;
            var wat = new Water(x, y);
            waterArr.push(wat);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

function AddLightning(){
    for(var i = 0; i < 7; i++){
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        if(matrix[y][x]){
            matrix[y][x] = 6;
            var lig = new Lightning(x, y);
            lightningArr.push(lig);
        }
    }
    io.sockets.emit("Send matrix", matrix);
}

 weather = "winter";

function Winter(){
    weather = 'winter';
    io.sockets.emit('Winter', weather);
}

function Spring(){
    weather = 'spring';
    io.sockets.emit('Spring', weather);
}

function Summer(){
    weather = 'summer';
    io.sockets.emit('Summer', weather);
}

function Autumn(){
    weather = 'autumn';
    io.sockets.emit('Autumn', weather);
}


io.on('connection', function(socket){
    createObject();
    socket.on("addGrass", AddGrass);
    socket.on("addGrasseater", AddGrasseater);
    socket.on("addPredator", AddPredator);
    socket.on("addHunter", AddHunter);
    socket.on("addWater", AddWater);
    socket.on("addLightning", AddLightning);
    socket.on("killAll", KillAll);
    socket.on("winter", Winter);
    socket.on("spring", Spring);
    socket.on("summer", Summer);
    socket.on("autumn", Autumn);
})

var statistics = {};
setInterval(function(){
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.hunter = hunterArr.length;
    statistics.water = waterArr.length;
    statistics.lightning = lightningArr.length;
    statistics.addGrassEater = addGrassEaterArr.length;

    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("statistics");
    })
}, 1000)