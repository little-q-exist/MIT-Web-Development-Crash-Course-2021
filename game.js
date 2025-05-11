let lastRenderTime = 0;
const SNAKE_SPEED = 5;

const main = (currentTime) => {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    console.log("Rendering");
}

const draw = () => {

}