<template>
  <v-container id="snake">

  </v-container>
</template>
<script>
  // eslint-disable-next-line max-len
  /* eslint-disable no-use-before-define,no-param-reassign,consistent-return,no-underscore-dangle,class-methods-use-this,prefer-const,one-var,default-case,space-infix-ops,no-unused-vars,no-new */
  import Direction from '../class/Direction';

  export default {
    mounted() {
      /**
       * Created by bad4iz on 14.03.2017.
       */
      const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;

      const POINT = 100,
        FIELD_WIDTH = Math.floor(document.documentElement.clientWidth / POINT),
        FIELD_HEIGHT = Math.floor(document.documentElement.clientHeight / POINT),
        DEFAULT_COLOR = '#222',
        FOOD_COLOR = '#090',
        POISON_COLOR = '#900',
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40,
        PLAY = true;


      const conf = {
        POINT, // in pix
        FIELD_WIDTH,
        FIELD_HEIGHT,

        // START_SNAKE_X: 20,
        START_SNAKE_SIZE: 6,
        SHOW_DELAY: 100,

      };

      /**
       * холст
       */
      class Canvas {
        constructor() {
          this.canvasElement = document.createElement('canvas');
          this.canvasElement.id = 'snake_canvas';
          document.body.querySelector('#snake').appendChild(this.canvasElement);
          this.canvasElement.width = conf.FIELD_WIDTH * conf.POINT;
          this.canvasElement.height = conf.FIELD_HEIGHT * conf.POINT;
          this.canvasElement.style.position = 'fixed';
          this.canvasElement.style.top = '0';
          this.canvasElement.style.left = '0';
        }

        context(context) {
          return this.canvasElement.getContext(context);
        }
      }

      /**
       * игра
       */
      class GameSnake {
        constructor() {
          console.log(34535235);
          const canvas = new Canvas();
          document.body.addEventListener('keydown', (event) => {
            console.log(event.keyCode);
          });
        }
        static go() {
          setInterval(() => {
            if (conf.GAME_OVER) {
              return;
            }
            GameSnake.go();
          }, 12);
        }
      }


      // Рисует функция draw
      // Продолжительность анимации duration
      function go(draw, duration) {
        const start = performance.now();

        requestAnimationFrame(function animate(time) {
          // определить, сколько прошло времени с начала анимации
          let timePassed = time - start;

          // возможно небольшое превышение времени, в этом случае зафиксировать конец
          if (timePassed > duration) {
            timePassed = duration;
          }

          // нарисовать состояние анимации в момент timePassed
          draw(timePassed);

          // если время анимации не закончилось - запланировать ещё кадр
          if (PLAY) {
            requestAnimationFrame(animate);
          }
        });
      }
    },
    methods: {
    },
  };
</script>
