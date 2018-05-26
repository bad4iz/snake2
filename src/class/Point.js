/* eslint-disable no-return-assign,no-underscore-dangle */
import Conf from './conf';

const conf = new Conf();
const number = (() => {
  let i = 0;
  return () => i += 1;
})();

export default class Point {
  constructor(x, y, ctx) {
    this.x = x;
    this._number = number();
    this.y = y;
    this.color = conf.DEFAULT_COLOR;
    this.graphics = {};
    this.ctx = ctx;
  }

  paint() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, conf.POINT, conf.POINT);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '10px Arial';
    this.ctx.fillText(this.number, this.x + (conf.POINT / 2), this.y + (conf.POINT / 2));
    this.ctx.fillStyle = this.color;
  }
  get number() {
    return this._number;
  }
}
