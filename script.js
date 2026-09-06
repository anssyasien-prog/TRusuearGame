// // 

// const level = document.getElementById('level');
// const hearts = document.getElementById('hearts');
// const boxes = document.getElementById('boxes');
// const statusText = document.getElementById('statusText');
// const reset = document.getElementById('reset');
// const winSound = document.getElementById('winSound');
// const loseSound = document.getElementById('loseSound');

// let life = 3; // يحتوي علي عدد القلوب
// let gameOver = false; // تشغيل وإيقاف اللعبة
// let currentLevel = 1; // إظهار رقم الليفل علي الشاشة
// let treasureIndex = 0; // بداخله ترتيب صندوق الكنز
// reset.style.display = 'none';
// function generateBoxes(x) {
//     gameOver = false;
//     life = 3;
//     hearts.innerText = '💖'.repeat(3);                                 
//     boxes.innerHTML = '';
//     level.innerText = Level ${currentLevel}
//     treasureIndex = Math.floor(Math.random() * x);
//     for (let i=0; i<x; i++) {
//         const box = document.createElement('img');
//         box.src = 'files/box_closed.png';
//         box.classList.add('image');
//         box.dataset.index = i;
//         box.addEventListener('click', () => {
//             if (gameOver) return;
//             if (box.dataset.index == treasureIndex){
//                 gameOver = true;
//                 box.src = 'files/win_box.png';
//                 winSound.play();
//                 setTimeout(() => {
//                     currentLevel += 1;
//                     generateBoxes(currentLevel+1)
//                 }, 2000);
//             } else {
//                 box.style.pointerEvents = 'none';
//                 box.src = 'files/lose_box.png';
//                 loseSound.play();
//                 life--;
//                 hearts.innerText = '💖'.repeat(life);
//                 if (life == 0) {
//                     gameOver = true;
//                     statusText.innerText = 'Game Over';
//                     statusText.style.color = 'red';
//                     reset.style.display = '';
//                 }
//             }
//         });
//         boxes.appendChild(box);
//     }

// };

// generateBoxes(2);

// reset.addEventListener('click', () => {
//     currentLevel = 1;
//     level.innerText = Level ${currentLevel}
//     gameOver = false;
//     statusText.innerText = '';
//     reset.style.display = 'none';
//     generateBoxes(2);

// })

const level = document.getElementById('level');
const hearts = document.getElementById('hearts');
const boxes = document.getElementById('boxes');
const statusText = document.getElementById('statusText');
const reset = document.getElementById('reset');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');

let life = 3; // يحتوي علي عدد القلوب
let gameOver = false; // تشغيل وإيقاف اللعبة
let currentLevel = 1; // إظهار رقم الليفل علي الشاشة
let treasureIndex = 0; // بداخله ترتيب صندوق الكنز
reset.style.display = 'none';
function generateBoxes(x) {
    gameOver = false;
    life = 3;
    hearts.innerText = '💖'.repeat(3);                                 
    boxes.innerHTML = '';
    level.innerText =` Level ${currentLevel}`
    treasureIndex = Math.floor(Math.random() * x);
    for (let i=0; i<x; i++) {
        const box = document.createElement('img');
        box.src = 'files/box_closed.png';
        box.classList.add('image');
        box.dataset.index = i;
        box.addEventListener('click', () => {
            if (gameOver) return;
            if (box.dataset.index == treasureIndex){
                gameOver = true;
                box.src = 'files/win_box.png';
                winSound.play();
                setTimeout(() => {
                    currentLevel += 1;
                    generateBoxes(currentLevel+1)
                }, 2000);
            } else {
                box.style.pointerEvents = 'none';
                box.src = 'files/lose_box.png';
                loseSound.play();
                life--;
                hearts.innerText = '💖'.repeat(life);
                if (life == 0) {
                    gameOver = true;
                    statusText.innerText = 'Game Over';
                    statusText.style.color = 'red';
                    reset.style.display = '';
                }
            }
        });
        boxes.appendChild(box);
    }

};

generateBoxes(2);

reset.addEventListener('click', () => {
    currentLevel = 1;
    level.innerText = `Level ${currentLevel}`
    gameOver = false;
    statusText.innerText = '';
    reset.style.display = 'none';
    generateBoxes(2);

})