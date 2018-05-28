/* eslint-disable max-len,no-unused-vars,default-case */
import conf from './conf';

export default class {
  constructor(canvas) {
    this.LEFT = 37;
    this.UP = 38;
    this.RIGHT = 39;
    this.DOWN = 40;
    this.direction = conf.directions[1];


    addEventListener('keydown', (event) => {
      const direction = event.keyCode;

      if (direction >= this.LEFT && direction <= this.DOWN) {
        // отсев
        if (Math.abs(this[this.direction] - direction) !== 2) {  // отсев вхождения головы в во второй элемент тела
          switch (direction) {
            case this.UP:
              this.direction = conf.directions[0];
              break;
            case this.RIGHT:
              this.direction = conf.directions[1];
              break;
            case this.DOWN:
              this.direction = conf.directions[2];
              break;
            case this.LEFT:
              this.direction = conf.directions[3];
              break;
          }
        }
      }
    });
  }
}
