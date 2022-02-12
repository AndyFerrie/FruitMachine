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

// Win FX plays after 4 second delay + disables spin button

function win(el) {
    setTimeout(function(){ 
        winFX.play(); 
        winDisable();
        winAnimation(el);
        removeWinAnimation(el);
        }, 4101)
}

// Credit & Points

var credit = 100;
var points = 0;

getElement('credit').innerText = credit;
getElement('points').innerText = points;

function creditCounter() {
    credit -= 1;
    getElement('credit').innerText = credit;
}

const counter = getElement('points');


function winPoints(no) {
    setTimeout(function(){ 
        var target = points + no;
        var options = {
            separator: ''
        };
        var c = new CountUp("points", points, target, 0, 7, options);
        c.start();
        points += no;
        counter.innerText = points;
        }, 4000)   
}

// Win animation

function winAnimation(el) {
    el.classList.add("winAnimation"); 
}

function removeWinAnimation(el) {
    setTimeout(function() {
        el.classList.remove("winAnimation");
        counter.classList.remove("winAnimation");
      }, 7000);
}

// Click to spin

function spin() {

playSpinFX();

creditCounter();
disable();

reset(slotOne);
reset(slotTwo);
reset(slotThree);

slotOne.classList.add('marqueeOne');
slotTwo.classList.add('marqueeTwo');
slotThree.classList.add('marqueeThree');

const icon1 = getRandomNumber();
const icon2 = getRandomNumber();
const icon3 = getRandomNumber();

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

if (icon1 === 1 && icon2 === 1 && icon3 === 1) {
    winPoints(100);
    win(githubIcons);
} else if (icon1 === 2 && icon2 === 2 && icon3 === 2) {
    winPoints(200);
    win(androidIcons);
} else if (icon1 === 3 && icon2 === 3 && icon3 === 3) {
    winPoints(300);
    win(html5Icons);
} else if (icon1 === 4 && icon2 === 4 && icon3 === 4) {
    winPoints(400);
    win(rubyIcons);
} else if (icon1 === 5 && icon2 === 5 && icon3 === 5) {
    winPoints(500);
    win(reactIcons);
}
}

const spinBtn = getElement('spinBtn')

spinBtn.addEventListener("click", spin);

// Disable spin button temporarily 

function disable() {
    spinBtn.classList.add('disable');
    setTimeout(function() {
        spinBtn.classList.remove("disable");
      }, 4100);
}

function winDisable() {
    spinBtn.classList.add('disable');
    setTimeout(function() {
        spinBtn.classList.remove("disable");
      }, 7000);
}






