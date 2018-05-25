// eslint-disable-next-line max-len
/* eslint-disable no-use-before-define,no-param-reassign,consistent-return,no-underscore-dangle,class-methods-use-this,prefer-const,one-var,default-case,space-infix-ops,no-unused-vars,no-new */

import Mouse from './Mouse';
import Canvas from './Canvas';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = new Canvas();
  const mouse = new Mouse(canvas.canvasElement);

  function move() {
    console.log(mouse.direction);

    window.requestAnimationFrame(move);
  }
  move();
});

