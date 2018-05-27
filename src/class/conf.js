const POINT = 60;
export default {
  POINT,
  FIELD_WIDTH: Math.floor(document.documentElement.clientWidth / POINT),
  FIELD_HEIGHT: Math.floor(document.documentElement.clientHeight / POINT),
  DEFAULT_COLOR: '#222',
  FOOD_COLOR: '#090',
  POISON_COLOR: '#900',
  CONTROL_SENSITIVITY: 3, // чуствительность управления
  START_SNAKE_SIZE: 2,
  START_SNAKE_X: 6,
  START_SNAKE_Y: 0,
  GAME_OVER: false,
  directions: [
    'UP',
    'RIGHT',
    'DOWN',
    'LEFT',
  ],
};

