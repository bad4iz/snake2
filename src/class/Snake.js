/* eslint-disable one-var */
import Point from './Point';
import Conf from './conf';

const conf = new Conf();

export default class {
  constructor(ctx) {
    let i;
    const x = conf.START_SNAKE_X;
    const y = conf.START_SNAKE_Y;
    this.length = conf.START_SNAKE_SIZE;
    this.snake = [];
    this.direction = conf.START_DIRECTION;
    this.graphics = {};
    this.ctx = ctx;
    // инициализация тела змеи
    for (i = 0; i < this.length; i += 1) {
      const point = new Point(((i * conf.POINT) + x), y, this.ctx);
      console.log(((i * conf.POINT) + conf.START_SNAKE_X), y);
      this.snake.push(point);
    }
  }

  /**
   * прорисовка тела
   * @param graphics
   */
  paint() {
    this.snake.forEach(point => point.paint());
  }
}
