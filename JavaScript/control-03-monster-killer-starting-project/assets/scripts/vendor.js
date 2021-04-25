const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const headBonusLifeEl = document.getElementById('player-health-life');
const bonusLifeEl = document.getElementById('bonus-life');
const controlsEl = document.getElementById('controls');
const startGameEl = document.getElementById('start-game');

const startBtn = document.getElementById('start-btn');
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');


function startGame() {
  startGameEl.style.display = 'none';
  controlsEl.style.display = 'flex';
}

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  headBonusLifeEl.removeChild(bonusLifeEl);
}

function addBonusLife() {
  var bonusLifeEl = document.createElement("span");
  bonusLifeEl.setAttribute('id', 'bonus-life')
  var lifeCount = document.createTextNode("1");
  bonusLifeEl.appendChild(lifeCount);
  headBonusLifeEl.appendChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
