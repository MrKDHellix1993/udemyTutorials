function startNewGame() {
  let entredLife = prompt('Please set initial Life of the player!!!', '100');
  entredLife = parseInt(entredLife);
  if(isNaN(entredLife) || entredLife <= 0){
      chosenMaxLife = 100;
  }else{
      chosenMaxLife = entredLife;
      currentMonsterLife = chosenMaxLife;
      currentPlayerLife = chosenMaxLife;
  }
  adjustHealthBars(chosenMaxLife);
  startGame();
}

function restartGame() {
  let restartFlag = confirm('Do you want to restart the Game!!!');
  if(restartFlag){
      resetValues();
  }
}

function resetValues() {
  if(!hasBonusLife){
      addBonusLife();
  }
  hasBonusLife = true;
  currentPlayerLife = chosenMaxLife;
  currentMonsterLife = chosenMaxLife;
  resetGame(chosenMaxLife);
}