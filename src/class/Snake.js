/* eslint-disable one-var,class-methods-use-this,default-case,no-unused-vars,max-len,prefer-const,new-cap */
import Point from './Point';
import conf from './conf';
import Mouse from './Mouse';
import Swipe from './Keydown';
import Food from './Food';
import factoryControl from './FactoryControl';

const width = () => Math.floor(document.documentElement.clientWidth / conf.POINT),
  heigth = () => Math.floor(document.documentElement.clientHeight / conf.POINT);

export default class {
  constructor(canvas, cont) {
    let i;
    const x = conf.START_SNAKE_X;
    const y = conf.START_SNAKE_Y;
    this.length = conf.START_SNAKE_SIZE;
    this.length = conf.START_SNAKE_SIZE;
    this.direction = conf.START_DIRECTION;
    this.graphics = {};
    this.ctx = canvas.context;
    const controlDirection = factoryControl(cont);
    this.control = new controlDirection(canvas.canvasElement);
    this.GAME_OVER = false;
    // инициализация тела змеи
    this.snake = [];
    for (i = 0; i < this.length; i += 1) {
      this.snake.push({ x: x - i, y });
    }
    this.food = new Food(1, 3, canvas.context);
  }

  /**
   * прорисовка тела
   */
  paint() {
    this.snake.forEach((item) => {
      const point = new Point(item.x, item.y, this.ctx);
      point.paint();
      // console.log(point.x, point.y);
    });
    if (this.food) {
      this.food.paint();
    }
  }

  /**
   * шаг змеи
   */
  move() {
    // получаем голову
    let x = this.snake[0].x;
    let y = this.snake[0].y;
    [x, y] = this.getDirection(x, y); // деструктивное присваивание координат следующего шага

    // проверка на конец игры
    const im = this.snake.filter(item => item.x === x && item.y === y);
    if (im.length) {
      this.GAME_OVER = true;
    }

    if (this.food && this.food.x === x && this.food.y === y) {
      this.length += 1;
      do {
        this.food.x = Math.round(Math.random() * (width() - 1));
        this.food.y = Math.round(Math.random() * (heigth() - 1));
      } while (this.food && this.food.x === x && this.food.y === y);
    } else {
      this.snake.pop();
    }
    this.snake.unshift({ x, y });
    this.paint();
  }

  getDirection(x1, y1) {
    this.direction = this.control.direction;
    let x,
      y;
    switch (this.direction) {
      case conf.directions[0]:
        x = x1;
        y = y1 - 1;
        // console.log('вверх', x, y);
        break;
      case conf.directions[1]:
        x = x1 + 1;
        y = y1;
        // console.log('право', x, y);
        break;
      case conf.directions[2]:
        x = x1;
        y = y1 + 1;
        // console.log('вниз', x, y);
        break;
      case conf.directions[3]:
        x = x1 - 1;
        y = y1;
        // console.log('влево', x, y);
        break;
    }


    if (x + 1 > width()) {
      x = 0;
    }
    if (x < 0) {
      x = width() - 1;
    }
    if (y + 1 > heigth()) {
      y = 0;
    }
    if (y < 0) {
      y = heigth() - 1;
    }
    // const y = y1 + 0;
    return [x, y];
  }
  rePaint() {
    this.food.paint();
    // let i;
    // this.snake.forEach(item => {})
    // for (i = 0; i < this.length; i += 1) {
    //   const point = new Point((x - i) * conf.POINT, y * conf.POINT, this.ctx);
    //   this.snake.push(point);
    // }
    //   this.food.x = Math.abs(Math.round((Math.random() * (width() / conf.POINT)) - 1) * conf.POINT);
    //   this.food.y = Math.abs(Math.round((Math.random() * (this.heigth() / conf.POINT)) - 1) * conf.POINT);
  }
}
