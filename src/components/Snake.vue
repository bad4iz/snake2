<template>
  <div>
    <v-container v-if="!control" fluid>
      <v-select
        :items="items"
        v-model="control"
        label="Выберите управление змейкой"
        class="input-group--focused"
        item-value="text"
        return-object
      ></v-select>
    </v-container>

    <v-container id="snake">

    </v-container>
  </div>
</template>
<script>
  // eslint-disable-next-line max-len
  /* eslint-disable no-use-before-define,no-param-reassign,consistent-return,no-underscore-dangle,class-methods-use-this,prefer-const,one-var,default-case,space-infix-ops,no-unused-vars,no-new,max-len,no-shadow */
  import Mouse from '../class/Mouse';
  import Canvas from '../class/Canvas';
  import Point from '../class/Point';
  import Snake from '../class/Snake';
  import conf from '../class/conf';

  export default {
    data() {
      return {
        control: null,
        items: [
          { text: 'стрелками клавиатуры', value: 'Keydown' },
          { text: 'свайпом', value: 'Swipe' },
          { text: 'мышью', value: 'Mouse' },
        ],
        i: 1,
        change: false,
        fps: 1,
        now: null,
        then: null,
        delta: null,
        snake: null,
        canvas: null,
      };
    },
    // todo: сделать селект выбора контрола управления
    created() {
      const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    },
    watch: {
      control(val) {
        this.canvas = new Canvas();
        // const control = new Mouse(canvas.canvasElement);

        this.snake = new Snake(this.canvas, val.value);
        this.snake.paint();
        this.move();
      },
    },
    mounted() {
      // const canvas = new Canvas();
      // // const control = new Mouse(canvas.canvasElement);
      //
      // let snake = new Snake(canvas, 'Keydown');
      // snake.paint();


      document.addEventListener('DOMContentLoaded', () => {
        // move();
      });
    },
    methods: {
      move(now) {
        const interval = 1000 / this.fps;
        if (!this.then) {
          this.then = now;
        }
        window.requestAnimationFrame(this.move);
        this.delta = now - this.then;
        if (this.delta > interval) {
          this.then = now - (this.delta % interval);

          if (!this.snake.GAME_OVER) {
            this.canvas.context.clearRect(0, 0, this.canvas.canvasElement.width, this.canvas.canvasElement.height);
            this.snake.move();
            this.canvas.context.beginPath();
            this.canvas.context.fillStyle = 'blue';
            this.canvas.context.font = '50px Arial';
            this.canvas.context.fillText(this.snake.length, 100, 100);
            if (!this.change && this.snake.length % 5 === 0) {
              this.change = true;
              conf.POINT -= 2;
              this.fps += 0.5;
              this.snake.rePaint();
            } else if (this.snake.length % 5 !== 0) {
              this.change = false;
            }
            this.i = 1;
          } else {
            conf.POINT = 60;
            this.fps = 1;
            this.snake = null;
            this.snake = new Snake(this.canvas);
            this.snake.paint();
          }
        }
        this.i += 1;
      },
    },
  };
</script>
