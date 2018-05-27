/* eslint-disable one-var,class-methods-use-this,default-case,no-unused-vars,max-len */
import Point from './Point';
import Conf from './conf';
import Mouse from './Mouse';
import Swipe from './Swipe';
import Food from './Food';

const conf = new Conf();

export default class {
  constructor(canvas) {
    let i;
    const x = conf.START_SNAKE_X;
    const y = conf.START_SNAKE_Y;
    this.length = conf.START_SNAKE_SIZE;
    this.width = conf.FIELD_WIDTH * conf.POINT;
    this.heigth = conf.FIELD_HEIGHT * conf.POINT;
    this.length = conf.START_SNAKE_SIZE;
    this.snake = [];
    this.direction = conf.START_DIRECTION;
    this.graphics = {};
    this.ctx = canvas.context;
    this.control = new Swipe(canvas.canvasElement);
    this.GAME_OVER = false;
    // инициализация тела змеи
    for (i = 0; i < this.length; i += 1) {
      const point = new Point((x - i) * conf.POINT, y * conf.POINT, this.ctx);
      this.snake.push(point);
    }
    this.food = new Food(5 * conf.POINT, 2 * conf.POINT, canvas.context);
  }

  /**
   * прорисовка тела
   */
  paint() {
    this.snake.forEach(point => point.paint());
    if (this.food) this.food.paint();
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
    const im = this.snake.filter(item => item.x === x && item.y === y);
    if (im.length) {
      this.GAME_OVER = true;
    }
    // todo: проверка на вставку еды не в тело
    if (this.food && this.food.x === x && this.food.y === y) {
      this.food.x = Math.abs(Math.round((Math.random() * (this.width / conf.POINT)) - 1) * conf.POINT);
      this.food.y = Math.abs(Math.round((Math.random() * (this.heigth / conf.POINT)) - 1) * conf.POINT);
      // console.log(this.food.x, this.food.y);
    } else {
      this.snake.pop();
    }
    this.snake.unshift(new Point(x, y, this.ctx));
    this.paint();
  }

  getDirection(x1, y1) {
    this.direction = this.control.direction;
    let x,
      y;
    switch (this.direction) {
      case conf.directions[0]:
        x = x1;
        y = y1 - conf.POINT;
        // console.log('вверх', x, y);
        break;
      case conf.directions[1]:
        x = x1 + conf.POINT;
        y = y1;
        // console.log('право', x, y);
        break;
      case conf.directions[2]:
        x = x1;
        y = y1 + conf.POINT;
        // console.log('вниз', x, y);
        break;
      case conf.directions[3]:
        x = x1 - conf.POINT;
        y = y1;
        // console.log('влево', x, y);
        break;
    }


    if (x + conf.POINT > this.width) {
      x = 0;
    }
    if (x < 0) {
      x = this.width - conf.POINT;
    }
    if (y + conf.POINT > this.heigth) {
      y = 0;
    }
    if (y < 0) {
      y = this.heigth - conf.POINT;
    }
    // const y = y1 + 0;
    return [x, y];
  }
}
