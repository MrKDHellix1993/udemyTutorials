
/* var vs let vs const  */
/* var */
let authUser = true;
if(authUser){
    var shoppingCart = ['Eggs', 'Breads' , 'Wines'];
    console.log('var:shoppingCart in block',shoppingCart);
}
console.log('var:shoppingCart outside block',shoppingCart);

function varTest() {
    var hobbies = ['Music', 'Playing'];
    var hobbies = ['Movies', 'Dating'];
    console.log('var:hobbies inside fuction',hobbies);
    return hobbies;
}
{
    var hobbies = ['Web series'];
}
console.log('var:hobbies in outside fuction',hobbies);
console.log('var:hobbies in outside fuction',varTest());

/* let & const */
/* var authUser = true;
if(authUser){
    var shoppingCart = ['Eggs', 'Breads' , 'Wines'];
    console.log('var:shoppingCart in block',shoppingCart);
}
console.log('var:shoppingCart in block',shoppingCart); */


/* End  */
let task1 = document.getElementById('task1');
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');
let task4 = document.getElementById('task4');

const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 =  Math.random(); // produces random number between 0 (including) and 1 (excluding)
let randomNumList = [];

if(randomNumber1 > 0.7){
    alert(`${randomNumber1} is gt .7`);
}else{
    alert(`${randomNumber1} is lt .7`);
}

function generateRandmArray(size) {
    let x;
    let tempNumList = [];
    for (let index = 0; index < size; index++) {
        x = Math.floor(Math.random() * 90 + 10);
        tempNumList.push(x);
    }
    return tempNumList;
}

function activity2(iterationDirection) {
    let x = 1;
    randomNumList = generateRandmArray(5);
    if(randomNumList){
        console.log('I/p Array', randomNumList);
        console.log('Normal Way');
        if(iterationDirection === 'backward'){
            console.log('Backward Way');
            for (let index = randomNumList.length -1; index >= 0 ; index--) {
                const element = randomNumList[index];
                console.log(`element #${index+1} ==> ${element}`)
            }
        }else{
            console.log('Forward Way');
            for (let index = 0; index < randomNumList.length; index++) {
                const element = randomNumList[index];
                console.log(`element #${index+1} ==> ${element}`)
            }
        }
        console.log('2nd Way');
        for (const iterator of randomNumList) {
            console.log(`element #${x} ==> ${iterator}`);
            ++x; 
        }
    }else{
        alert(`Array is empty!!`);
    }
}

function activity3() {
    activity2('backward');
}

function activity4() {
    if(randomNumber1 > 0.7 && randomNumber2 > 0.7){
        alert(`${randomNumber1} & ${randomNumber2} are gt 0.7`);
    }else if( randomNumber1 < 0.2 || randomNumber2 < 0.2){
        alert(`${randomNumber1} or ${randomNumber2} are ng than 0.2`);
    }
}

task1.addEventListener('click', activity1);
task2.addEventListener('click', activity2);
task3.addEventListener('click', activity3);
task4.addEventListener('click', activity4);