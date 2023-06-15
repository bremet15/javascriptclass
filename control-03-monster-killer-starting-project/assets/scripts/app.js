

const ATTACK_VALUE = 10;  //naming convention
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE = 20;
let battleLog = [];
const enteredValue = prompt('Maximum lif for you and the monster.', '100');

const STRONG_ATTACK_VALUE = 17;  //naming convention
//const STRONG_MONSTER_ATTACK_VALUE = 14;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToAuditLog(event, value, mosterHealth, playerHealth) {

    let logEntry;
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            mosterHealth, mosterHealth,
            playerHealth, playerHealth
        }
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            mosterHealth, mosterHealth,
            playerHealth, playerHealth
        }
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            mosterHealth, mosterHealth,
            playerHealth, playerHealth
        }
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            mosterHealth, mosterHealth,
            playerHealth, playerHealth
        }
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            mosterHealth, mosterHealth,
            playerHealth, playerHealth
        }
    } else{
        logEntry={event: 'INVALID'}
    }
    battleLog.push(logEntry);
}

function attackMonster(attackValue) {
    const damage = dealMonsterDamage(attackValue);

       currentMonsterHealth -= damage;

    endRound();
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writeToAuditLog(LOG_EVENT_MONSTER_ATTACK,playerDamage,currentMonsterHealth,currentPlayerHealth);
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;

        setPlayerHealth(currentPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToAuditLog(LOG_EVENT_GAME_OVER,'PLAYER WON',currentMonsterHealth,currentPlayerHealth);
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        writeToAuditLog(LOG_EVENT_GAME_OVER,'PLAYER LOST',currentMonsterHealth,currentPlayerHealth);

        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You Draw!');
        writeToAuditLog(LOG_EVENT_GAME_OVER,'DRAW',currentMonsterHealth,currentPlayerHealth);

        reset();
    }
}

function attackHandler() {
    attackMonster(ATTACK_VALUE);
    writeToAuditLog(LOG_EVENT_PLAYER_ATTACK,ATTACK_VALUE,currentMonsterHealth,currentPlayerHealth);
}

function strongAttackHandler() {
    attackMonster(STRONG_ATTACK_VALUE);
    writeToAuditLog(LOG_EVENT_PLAYER_STRONG_ATTACK,STRONG_ATTACK_VALUE,currentMonsterHealth,currentPlayerHealth);

}

function healPlayerHandler() {
    let healValue = HEAL_PLAYER_VALUE;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_PLAYER_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
    }

    currentPlayerHealth += healValue;
    increasePlayerHealth(healValue);
    endRound();
}

function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)