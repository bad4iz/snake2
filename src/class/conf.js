export default class {
  constructor() {
    this.POINT = 10;
    this.FIELD_WIDTH = Math.floor(document.documentElement.clientWidth / this.POINT);
    this.FIELD_HEIGHT = Math.floor(document.documentElement.clientHeight / this.POINT);
    this.DEFAULT_COLOR = '#222';
    this.FOOD_COLOR = '#090';
    this.POISON_COLOR = '#900';
    this.CONTROL_SENSITIVITY = 3; // чуствительность управления
    this.START_SNAKE_SIZE = 6;
    this.START_SNAKE_X = 20;
    this.START_SNAKE_Y = 20;
    this.directions = [
      'UP',
      'RIGHT',
      'DOWN',
      'LEFT',
    ];
  }
}
