const startGameBtn = document.getElementById('start-game-btn');

let startGame = function startGame(){
    console.log('Starting the game...');
}

let gameAPI = {
    start : startGame
}

console.log(typeof gameAPI.start);
console.dir(gameAPI.start);