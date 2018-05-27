import Point from './Point';
import conf from './conf';


export default class Food extends Point {
  constructor(x, y, ctx) {
    super(x, y, ctx);
    this.color = conf.FOOD_COLOR;
  }
}
