let chosenMaxLife = 100;
let bonusLifeAvailable = 1;
let showControlPanel = false;
let currentMonsterLife;
let currentPlayerLife;
let hasBonusLife = true;
let logEntries = [];

function doAttack(attackMode) {
    const attackValue = attackMode === NORML_ATTACK ? NORML_ATTACK_VALUE : SPECL_ATTACK_VALUE;
    const eventType = attackMode === NORML_ATTACK ? NORML_ATTACK_EVENT : SPECIAL_ATTACK_EVENT;
    const monsterDamage = dealMonsterDamage(attackValue);
    currentMonsterLife -= monsterDamage;
    writeToLog(eventType, attackValue , currentPlayerLife,currentMonsterLife);
    finalRound();
}

function finalRound() {
    let initialHealth = currentPlayerLife;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerLife -= playerDamage;
    if (currentPlayerLife <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerLife = initialHealth + 10;
        setPlayerHealth(currentPlayerLife);
    } else {
        if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
            alert('You Won!!!');
            writeToLog(FINAL_ROUND, 'PLAYER', currentPlayerLife,currentMonsterLife);
        } else if (currentPlayerLife <= 0 && currentMonsterLife > 0) {
            alert('You Lost!!!')
            writeToLog(FINAL_ROUND, 'MONSTER', currentPlayerLife,currentMonsterLife);
        } else if (currentMonsterLife <= 0 && currentPlayerLife <= 0) {
            alert('It\'s a Draw');
            writeToLog(FINAL_ROUND, 'DRAW', currentPlayerLife,currentMonsterLife);
        }
    }
    if (currentPlayerLife <= 0 || currentMonsterLife <= 0) {
        restartGame();
    }
}

function attackBoys() {
    doAttack(NORML_ATTACK);
}

function specialAttackBoys() {
    doAttack(SPECIAL_ATTACK);
}
function recoverBoys() {
    let heathValue;
    if (currentPlayerLife == chosenMaxLife) {
        alert('You can\'t redeem more than this life');
    }
    if (currentPlayerLife >= chosenMaxLife - HEALTH_VALUE) {
        heathValue = chosenMaxLife - currentPlayerLife;
    } else {
        heathValue = HEALTH_VALUE;
    }
    currentPlayerLife += heathValue;
    increasePlayerHealth(heathValue);
    writeToLog(PLAYER_HEAL_EVENT, heathValue, currentPlayerLife,currentMonsterLife);
    finalRound();
}

function writeToLog(event, value, playerHealth, monsterHealth) {
    let logEntryObj = {
        eventType: event,
        value: value,
        playerHealth: playerHealth,
        monsterHealth: monsterHealth,
    }
    if (event == MONSTR_ATTACK_EVENT) {
        logEntryObj.target = 'PLAYER';
    } else if (event == NORML_ATTACK_EVENT) {
        logEntryObj.target = 'MONSTER';
    } else if (event == SPECIAL_ATTACK_EVENT) {
        logEntryObj.target = 'PLAYER';
    } else if (event == PLAYER_HEAL_EVENT) {
        logEntryObj.target = 'PLAYER';
    }else{
        logEntryObj.whoWon = value;
    }
    logEntries.push(logEntryObj);
}

function showMeLogsBoys() {
    debugger;
    if(logEntries){
        let index = 1;
        outerLoop : for (const logObj of logEntries) {
            console.log('\n');
            console.log(`Log Entry #${index}`)
            console.log(logObj);
            console.log('And it\'s key value pair reperesntaition as below:');
            debugger;
           innerLoop :  for (const key in logObj) {
                if (Object.hasOwnProperty.call(logObj, key)) {
                    const element = logObj[key];
                    console.log(`${key} ==> ${element}`);
                    break outerLoop;
                }
            }
            ++index;
        }
        console.log(logEntries)
    }
}

startBtn.addEventListener('click', startNewGame);
attackBtn.addEventListener('click', attackBoys);
strongAttackBtn.addEventListener('click', specialAttackBoys);
healBtn.addEventListener('click', recoverBoys);
logBtn.addEventListener('click', showMeLogsBoys);