import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AudioService } from '../../utils/audioService';

interface Position {
  x: number;
  y: number;
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 });
  const [nextDirection, setNextDirection] = useState<Position>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout>();

  const gridSize = 20;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setNextDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setNextDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setNextDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setNextDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: (prevSnake[0].x + nextDirection.x + gridSize) % gridSize,
          y: (prevSnake[0].y + nextDirection.y + gridSize) % gridSize,
        };

        if (
          prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setGameOver(true);
          AudioService.playClick();
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          AudioService.playSuccess();
          setScore((s) => s + 1);
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
        } else {
          newSnake.pop();
        }

        setDirection(nextDirection);
        return newSnake;
      });
    }, 200);

    return () => clearInterval(gameLoopRef.current);
  }, [nextDirection, gameOver, food]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 1, y: 0 });
    setNextDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    AudioService.playClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Snake Game</h3>
        <div className="text-[#0099ff] font-bold text-lg">Score: {score}</div>
      </div>

      <div className="mb-6 inline-block bg-black p-2 rounded-lg border border-[#0099ff]/50">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            width: `${gridSize * 20}px`,
          }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const x = i % gridSize;
            const y = Math.floor(i / gridSize);
            const isSnake = snake.some((s) => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0].x === x && snake[0].y === y;

            return (
              <div
                key={i}
                className={`w-5 h-5 rounded-sm transition-colors ${
                  isSnake
                    ? isHead
                      ? 'bg-[#0099ff]'
                      : 'bg-blue-600'
                    : isFood
                      ? 'bg-yellow-400'
                      : 'bg-gray-900'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-gray-300 text-sm">
          Utilise les flèches du clavier pour contrôler le serpent
        </p>
        {gameOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center font-semibold"
          >
            Game Over! Score final: {score}
          </motion.div>
        )}
        {gameOver && (
          <button
            onClick={resetGame}
            className="w-full px-4 py-2 bg-[#0099ff] hover:bg-[#0088ee] text-white rounded-lg font-medium transition-colors"
          >
            Nouvelle Partie
          </button>
        )}
      </div>
    </motion.div>
  );
}
