/* eslint-disable no-undef,no-unused-vars */
import conf from './conf';

export default class {
  constructor(canvasElement) {
    console.log('new');
    this.pageWidth = window.innerWidth || document.body.clientWidth;
    this.treshold = Math.max(1, 6);
    this.touchstartX = 0;
    this.touchstartY = 0;
    this.direction = conf.directions[1];
    this.touchendX = 0;
    this.touchendY = 0;
    this.limit = Math.tan((45 * 1.5) / (180 * Math.PI));
    canvasElement.addEventListener('touchstart', (event) => {
      this.touchstartX = Math.round(event.changedTouches[0].screenX);
      this.touchstartY = Math.round(event.changedTouches[0].screenY);
    }, false);

    canvasElement.addEventListener('touchend', (event) => {
      this.touchendX = Math.round(event.changedTouches[0].screenX);
      this.touchendY = Math.round(event.changedTouches[0].screenY);
      const x = this.touchendX - this.touchstartX;
      const y = this.touchendY - this.touchstartY;
      const xy = Math.abs(x / y);
      const yx = Math.abs(y / x);
      // if (Math.abs(x) > this.treshold || Math.abs(y) > this.treshold) {
      if (Math.round(x / conf.CONTROL_SENSITIVITY) < 0) {
        if (this.direction !== conf.directions[1]) {
          this.direction = conf.directions[3];
        }
        // console.log('left', this.direction);
      }
      if (Math.round(x / conf.CONTROL_SENSITIVITY) > 0) {
        if (this.direction !== conf.directions[3]) {
          this.direction = conf.directions[1];
        }
        // console.log('right');
      }
      if (Math.round(y / conf.CONTROL_SENSITIVITY) < 0) {
        if (this.direction !== conf.directions[2]) {
          this.direction = conf.directions[0];
        }
        // console.log('top');
      }
      if (Math.round(y / conf.CONTROL_SENSITIVITY) > 0) {
        if (this.direction !== conf.directions[0]) {
          this.direction = conf.directions[2];
          console.log('bottom');
        }
      }
      // } else {
      //   console.log('tap');
      // }
    }, false);
  }
}
