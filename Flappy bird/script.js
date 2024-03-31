let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;
/* In js, variables must be declared before they used, =0 is initializing them with the value 0 */


// hole change position randomly 
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150); //-150~-450
    hole.style.top = random + "px";
    counter++;
    updateScore();
});


//gravity
setInterval(function () {
    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    /*this function moves the ball down */
    if (jumping == 0) {
        character.style.top = (characterTop + 2) + "px";
    }
    let blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop =
        parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

    let cTop = -(500 - (characterTop))

    if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 150)))) {
        alert("Game Over. Score " + counter);
        character.style.top = 100 + "px";
        counter = (-1);
    }
}, 10);



function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop =
            parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (counter < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}


function updateScore() {
    const scoreElement = document.getElementById("scoreValue");
    scoreElement.innerHTML = `${counter}`;
}
updateScore();

