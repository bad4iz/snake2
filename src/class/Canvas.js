/**
 * холст
 */
 export default class Canvas {
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
