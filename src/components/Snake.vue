<template>
  <v-container id="snake">

  </v-container>
</template>
<script>
  // eslint-disable-next-line max-len
  /* eslint-disable no-use-before-define,no-param-reassign,consistent-return,no-underscore-dangle,class-methods-use-this,prefer-const,one-var,default-case,space-infix-ops,no-unused-vars,no-new,max-len,no-shadow */
  import direction from '../class/Direction';
  import Mouse from '../class/Mouse';
  import Canvas from '../class/Canvas';
  import Point from '../class/Point';
  import Snake from '../class/Snake';
  import conf from '../class/conf';

  export default {
    created() {
      const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    },
    mounted() {
      document.addEventListener('DOMContentLoaded', () => {
        const canvas = new Canvas();
        // const control = new Mouse(canvas.canvasElement);
        // const direct = direction(control);

        let snake = new Snake(canvas);
        snake.paint();

        let i = 1;
        let speed = 30;
        let change = false;
        let fps = 1;
        let now;
        let then;
        let delta;

        function move(now) {
          const interval = 1000 / fps;
          if (!then) {
            then = now;
          }
          window.requestAnimationFrame(move);
          delta = now - then;
          if (delta > interval) {
            then = now - (delta % interval);

            if (!snake.GAME_OVER) {
              canvas.context.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
              snake.move();
              canvas.context.beginPath();
              canvas.context.fillStyle = 'blue';
              canvas.context.font = '50px Arial';
              canvas.context.fillText(snake.length, 100, 100);
              if (!change && snake.length % 5 === 0) {
                change = true;
                conf.POINT -= 2;
                fps += 0.5;
                snake.rePaint();
              } else if (snake.length % 5 !== 0) {
                change = false;
              }
              i = 1;
              // } else {
              //   // conf.POINT = 60;
              //   // speed = 30;
              //   // snake = null;
              //   // snake = new Snake(canvas);
              //   // snake.paint();
              // }
            }
            i += 1;
          }
        }

        move();
      });
    },
    methods: {},
  };
</script>
