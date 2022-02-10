// To move slot TranslateY(60px)
// Needs to include scale e.g. transform: scale(2.3) translateY(60px);
// 
//      Slot 1                  Slot 2                  Slot 3
//      1 Github    120px       3 HTML5     120px       2 Android   120px
//      3 HTML5     60px        1 Github    60px        4 Ruby      60px
//      5 React     0px         5 React     0px         5 React     0px
//      4 Ruby      -60px       2 Android   -60px       3 HTML5    -60px
//      2 Android   -120px      4 Ruby      -120px      1 Github    -120px
//
//  Matches: 
// 
//  1,1,1 = Github   100 points
//  2,2,2 = Android  200 points
//  3,3,3 = HTML5    300 points
//  4,4,4 = Ruby     400 points
//  5,5,5 = React    500 points

// Generate random number 

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Get element by ID

function getElement(id) {
    return document.getElementById(id);
}

// Move slots up or down

function upOne(el) {
    el.classList.add('upOne');
}

function upTwo(el) {
    el.classList.add('upTwo')
}

function downOne(el) {
    el.classList.add('downOne')
}

function downTwo(el) {
    el.classList.add('downTwo')
}

// Reset slots

function reset(el) {
    el.classList.remove('upOne');
    el.classList.remove('upTwo');
    el.classList.remove('downOne');
    el.classList.remove('downTwo');
    el.classList.remove('marqueeOne');
    el.classList.remove('marqueeTwo');
    el.classList.remove('marqueeThree');
    void el.offsetWidth; // https://css-tricks.com/restart-css-animation/
}

// Sound

const spinFX = getElement('spinFX');
const winFX = getElement('winFX');

function playSpinFX() {
    spinFX.play();
}

// Win plays after 4 second delay + disables spin button

function playWinFX() {
    setTimeout(function(){ 
        winFX.play(); 
        winDisable();
        }, 4000)
}

// Credit & Points

var credit = 100;
var points = 000;

getElement('credit').innerText = credit;
getElement('points').innerText = points;

function creditCounter() {
    credit -= 1;
    getElement('credit').innerText = credit;
}

function winPoints(no) {
    setTimeout(function(){ 
        points += no;
        getElement('points').innerText = points;
        }, 4000)
    
}

// Click to spin

function spin() {

playSpinFX();

creditCounter();
disable();


const slotOne = getElement('slotOne');
const slotTwo = getElement('slotTwo');
const slotThree = getElement('slotThree');

reset(slotOne);
reset(slotTwo);
reset(slotThree);

slotOne.classList.add('marqueeOne');
slotTwo.classList.add('marqueeTwo');
slotThree.classList.add('marqueeThree');

const icon1 = 1 //getRandomNumber();
const icon2 = 1 //getRandomNumber();
const icon3 = 1 //getRandomNumber();

console.log(icon1, icon2, icon3);

if (icon1 === 1) {
    upTwo(slotOne)
} else if (icon1 === 2) {
    downTwo(slotOne)
} else if (icon1 === 3) {
    upOne(slotOne)
} else if (icon1 === 4) {
    downOne(slotOne)
}

if (icon2 === 1) {
    upOne(slotTwo)
} else if (icon2 === 2) {
    downOne(slotTwo)
} else if (icon2 === 3) {
    upTwo(slotTwo)
} else if (icon2 === 4) {
    downTwo(slotTwo)
}

if (icon3 === 1) {
    downTwo(slotThree)
} else if (icon3 === 2) {
    upTwo(slotThree)
} else if (icon3 === 3) {
    downOne(slotThree)
} else if (icon3 === 4) {
    upOne(slotThree)
}

if (icon1 === icon2 && icon1 === icon3) {
    playWinFX();
}

if (icon1 === 1 && icon2 === 1 && icon3 === 1) {
    winPoints(100);
} else if (icon1 === 2 && icon2 === 2 && icon3 === 2) {
    winPoints(200);
} else if (icon1 === 3 && icon2 === 3 && icon3 === 3) {
    winPoints(300);
} else if (icon1 === 4 && icon2 === 4 && icon3 === 4) {
    winPoints(400);
} else if (icon1 === 5 && icon2 === 5 && icon3 === 5) {
    winPoints(500);
}
}



const spinBtn = getElement('spinBtn')

spinBtn.addEventListener("click", spin);

// Disable spin button temporarily 

function disable() {
    spinBtn.classList.add('disable');
    setTimeout(function() {
        spinBtn.classList.remove("disable");
      }, 4000);
}

function winDisable() {
    spinBtn.classList.add('disable');
    setTimeout(function() {
        spinBtn.classList.remove("disable");
      }, 7000);
}






