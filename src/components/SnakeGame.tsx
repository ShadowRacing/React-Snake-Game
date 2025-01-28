import React, { useState, useCallback } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;

function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState<"UP" | "DOWN" | "LEFT" | "RIGHT">(
    "RIGHT"
  );
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver || isPaused) return;

      const keyDirections: { [key: string]: () => void } = {
        ArrowUp: () => direction !== "DOWN" && setDirection("UP"),
        ArrowDown: () => direction !== "UP" && setDirection("DOWN"),
        ArrowLeft: () => direction !== "RIGHT" && setDirection("LEFT"),
        ArrowRight: () => direction !== "LEFT" && setDirection("RIGHT"),
        " ": () => setIsPaused((prev) => !prev),
      };

      if (keyDirections[event.key]) {
        keyDirections[event.key]();
      }
    },
    [direction, gameOver, isPaused]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  React.useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const newHead = { ...head };

        switch (direction) {
          case "UP":
            newHead.y -= 1;
            break;
          case "DOWN":
            newHead.y += 1;
            break;
          case "LEFT":
            newHead.x -= 1;
            break;
          case "RIGHT":
            newHead.x += 1;
            break;
        }

        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return currentSnake;
        }

        if (
          currentSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prev) => prev + 1);
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver, isPaused, generateFood]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    generateFood();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="mb-4 text-2xl font-bold text-white">Score: {score}</div>

      <div
        className="relative bg-gray-600 border-2 border-gray-400"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-green-400"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
            }}
          />
        ))}

        <div
          className="absolute bg-red-400 rounded-full"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />

        {gameOver && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-2xl mb-4">Game Over!</p>
              <button
                onClick={resetGame}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {isPaused && !gameOver && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <p className="text-white text-2xl">Paused</p>
          </div>
        )}
      </div>

      <div className="mt-4 text-gray-300">
        Use arrow keys to move • Space to pause
      </div>
    </div>
  );
}

export default SnakeGame;
