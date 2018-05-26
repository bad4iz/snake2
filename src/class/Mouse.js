import Conf from './conf';

const conf = new Conf();

export default class {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;
    this.direction = conf.directions[1];

    canvas.addEventListener('mousemove', (event) => {
      const deltaX = Math.round((event.clientX - this.x) / conf.CONTROL_SENSITIVITY);
      const deltaY = Math.round((this.y - event.clientY) / conf.CONTROL_SENSITIVITY);
      if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        if (deltaX > 0) {
          this.direction = conf.directions[1];
        }
        if (deltaX < 0) {
          this.direction = conf.directions[3];
        }
      } else {
        if (deltaY > 0) {
          this.direction = conf.directions[0];
        }
        if (deltaY < 0) {
          this.direction = conf.directions[2];
        }
      }
      this.x = event.clientX;
      this.y = event.clientY;
    });
  }
}
