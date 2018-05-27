import Point from './Point';
import Conf from './conf';

const conf = new Conf();

export default class Food extends Point {
  constructor(x, y, ctx) {
    super(x, y, ctx);
    this.color = conf.FOOD_COLOR;
  }
}
