<template>
  <div class="game-container">
    <canvas ref="gameCanvas" width="400" height="400"></canvas>
    <div class="score-display">得分: {{ score }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const gameCanvas = ref(null)
const ctx = ref(null)
const score = ref(0)

const state = reactive({
  snake: [{x: 200, y: 200}],
  direction: 'right',
  food: {x: 300, y: 300},
  cellSize: 20,
  gameLoop: null,
  isPaused: false,
  baseSpeed: 200,
  currentSpeed: 200
})

onMounted(() => {
  ctx.value = gameCanvas.value.getContext('2d')
  window.addEventListener('keydown', handleKeyPress)
  startGame()
})

onUnmounted(() => {
  cancelAnimationFrame(state.gameLoop)
  window.removeEventListener('keydown', handleKeyPress)
})

const startGame = () => {
  state.gameLoop = requestAnimationFrame(gameStep)
}

const gameStep = () => {
  if (!state.isPaused) {
    moveSnake()
    checkCollision()
    checkFood()
    draw()
  }
  state.gameLoop = requestAnimationFrame(gameStep)
}

const moveSnake = () => {
  const head = {...state.snake[0]};
  switch(state.direction) {
    case 'up': head.y -= state.cellSize; break;
    case 'down': head.y += state.cellSize; break;
    case 'left': head.x -= state.cellSize; break;
    case 'right': head.x += state.cellSize; break;
  }
  state.snake.unshift(head);
  if (!checkFood()) state.snake.pop();
}

const checkCollision = () => {
  const head = state.snake[0];
  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    alert('游戏结束！得分：' + score.value);
    resetGame();
    return;
  }
  for (let i = 1; i < state.snake.length; i++) {
    if (head.x === state.snake[i].x && head.y === state.snake[i].y) {
      alert('撞到自己了！得分：' + score.value);
      resetGame();
      break;
    }
  }
}

const checkFood = () => {
  const head = state.snake[0];
  if (head.x === state.food.x && head.y === state.food.y) {
    score.value += 10;
    generateFood();
    return true;
  }
  return false;
}

const draw = () => {
  ctx.value.clearRect(0, 0, 400, 400);
  
  // 绘制食物
  ctx.value.fillStyle = '#e74c3c';
  ctx.value.fillRect(state.food.x, state.food.y, state.cellSize - 2, state.cellSize - 2);

  // 绘制蛇身
  state.snake.forEach((segment, index) => {
    ctx.value.fillStyle = index === 0 ? '#2ecc71' : '#27ae60';
    ctx.value.fillRect(segment.x, segment.y, state.cellSize - 2, state.cellSize - 2);
  });
}

const handleKeyPress = (e) => {
  const keyMap = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right'
  };
  const newDir = keyMap[e.key];
  if (newDir && isValidDirection(newDir)) {
    state.direction = newDir;
  }
}

const isValidDirection = (newDir) => {
  const oppositeDirs = {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left'
  };
  return newDir !== oppositeDirs[state.direction];
}

const generateFood = () => {
  const maxPos = 400 / state.cellSize - 1;
  state.food = {
    x: Math.floor(Math.random() * maxPos) * state.cellSize,
    y: Math.floor(Math.random() * maxPos) * state.cellSize
  };
}

const togglePause = () => {
  state.isPaused = !state.isPaused
  if (!state.isPaused) {
    state.gameLoop = requestAnimationFrame(gameStep)
  }
}

const resetGame = () => {
  state.snake = [{x: 200, y: 200}]
  state.direction = 'right'
  score.value = 0
  state.currentSpeed = state.baseSpeed
  generateFood()
  state.isPaused = false
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

canvas {
  border: 2px solid #4CAF50;
  border-radius: 8px;
  background-color: #f0f0f0;
}

.score-display {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}
</style>