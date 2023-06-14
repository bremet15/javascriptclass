

const ATTACK_VALUE = 10;  //naming convention
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE = 20;


const STRONG_ATTACK_VALUE = 17;  //naming convention
//const STRONG_MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);


function attackMonster(attackValue){
    const damage  = dealMonsterDamage(attackValue);
    
    currentMonsterHealth -= damage;

    endRound();
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
 
function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage  = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
     
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;

        setPlayerHealth(currentPlayerHealth);
    }

    if(currentMonsterHealth <= 0 &&  currentPlayerHealth > 0){
        alert('You won!');
        reset();        
    }else if (currentPlayerHealth <= 0 &&  currentMonsterHealth > 0){
        alert('You Lose!');
        reset();
    }else if (currentPlayerHealth <= 0 &&  currentMonsterHealth <= 0){
        alert('You Draw!');
        reset();
    }
}

function attackHandler(attackValue){
    attackMonster(ATTACK_VALUE);
}

function strongAttackHandler(){
    attackMonster(STRONG_ATTACK_VALUE);
  
}

function healPlayerHandler(){
    let healValue = HEAL_PLAYER_VALUE;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_PLAYER_VALUE){
        healValue = chosenMaxLife - currentPlayerHealth;
    }

    currentPlayerHealth += healValue;
    increasePlayerHealth(healValue);
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);