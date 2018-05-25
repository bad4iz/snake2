import Conf from './conf';

const conf = new Conf();

export default class {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.color = conf.DEFAULT_COLOR;
    this.graphics = {};
    this.ctx = ctx;
  }

  paint() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, conf.POINT, conf.POINT);
  }
}
