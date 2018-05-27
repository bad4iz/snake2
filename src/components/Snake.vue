<template>
  <v-container id="snake">

  </v-container>
</template>
<script>
  // eslint-disable-next-line max-len
  /* eslint-disable no-use-before-define,no-param-reassign,consistent-return,no-underscore-dangle,class-methods-use-this,prefer-const,one-var,default-case,space-infix-ops,no-unused-vars,no-new */
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

        function move() {
          window.requestAnimationFrame(move);
          if (!(i % speed)) {
            if (!snake.GAME_OVER) {
              canvas.context.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
              snake.move();
              // if (!(snake.length % 30)) {
              if (!change && !snake.length%10) {
                change = true;
                conf.POINT -= 1;
                speed -= 1;
                snake.rePaint();
              } else {
                change = false;
              }
              i = 1;
            } else {
              conf.POINT = 60;
              speed = 30;
              snake = null;
              snake = new Snake(canvas);
              snake.paint();
            }
          }
          i += 1;
        }

        move();
      });
    },
    methods: {},
  };
</script>
