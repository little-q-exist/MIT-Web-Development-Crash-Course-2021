let foodPoistion = { x: 5, y: 5 };
const EXPANSION_RATE = 1;

const updateFood = () => {
    if (onSnake(foodPoistion)) {
        // move food pos;
        // increase the length of the snake.
        foodPoistion = getRandomPosition();
        expandSnake(EXPANSION_RATE);
    }
}

const drawFood = (gameBoard) => {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = foodPoistion.y;
    foodElement.style.gridColumnStart = foodPoistion.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

const getRandomPosition = () => {
    // generate a position on the grid;
    // while the position is on the snake, re-generate;
    let newFoodPosition = randomGridPosition();
    while (onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
