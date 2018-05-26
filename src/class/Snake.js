/* eslint-disable one-var,class-methods-use-this */
import Point from './Point';
import Conf from './conf';

const conf = new Conf();

export default class {
  constructor(ctx) {
    let i;
    const x = conf.START_SNAKE_X;
    const y = conf.START_SNAKE_Y;
    this.length = conf.START_SNAKE_SIZE;
    this.width = conf.FIELD_WIDTH * conf.POINT;
    this.length = conf.START_SNAKE_SIZE;
    this.snake = [];
    this.direction = conf.START_DIRECTION;
    this.graphics = {};
    this.ctx = ctx;
    // инициализация тела змеи
    for (i = 0; i < this.length; i += 1) {
      const point = new Point((x - i) * conf.POINT, y, this.ctx);
      this.snake.push(point);
    }
  }

  /**
   * прорисовка тела
   */
  paint() {
    this.snake.forEach(point => point.paint());
  }

  /**
   * шаг змеи
   * @param graphics
   */
  move() {
    // получаем голову
    let x = this.snake[0].x;
    let y = this.snake[0].y;

    [x, y] = this.getDirection(x, y); // деструктивное присваивание координат следующего шага

    // todo: проверка на конец игры
    // todo: проверка на еду
    this.snake.unshift(new Point(x, y, this.ctx));
    this.snake.pop();
    this.paint();
  }

  getDirection(x1, y1) {
    let x;
    if (x1 > this.width) {
      x = 0;
    } else {
      x = x1 + conf.POINT;
    }
    const y = y1 + 0;
    return [x, y];
  }
}
