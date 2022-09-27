import {updateBird} from "./bird.js"

document.addEventListener("keypress", handleStart, {once: true})
const title = document.querySelector("[data-title")


let lastTime;



function updateLoop(time) {
    if (lastTime === null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop);
        return;

    }
    const delta = time - lastTime;

    updateBird(delta) 

    lastTime = time;
    window.requestAnimationFrame(updateLoop);
}

//starts the game
function handleStart() {
    title.classList.add("hide");
    //requestAnimationFrame = more accurate than setInterval
    window.requestAnimationFrame(updateLoop);
}

//stops the game
function handleLose() {

}