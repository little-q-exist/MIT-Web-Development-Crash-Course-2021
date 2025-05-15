const SNAKE_SPEED = 5;
const snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 10 },
    { x: 11, y: 9 }
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    const snakeDirection = getInputDirection();
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }
}

const onSnake = (position) => {
    // let isonSnake = false;
    // for (const snakeposition in snakeBody) {
    //     if (equalPositions(position, snakeposition)) {
    //         isonSnake = true;
    //     }
    // }
    // return isonSnake;

    for (let i = 0; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[i], position)) {
            return true;
        }
    }
    return false;
}

const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const expandSnake = (amount) => {
    for (let i = 0; i < amount; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
}
