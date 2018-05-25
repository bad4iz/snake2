export default class {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;
    this.rect = canvas.getBoundingClientRect();

    canvas.addEventListener('mousemove', (event) => {
      this.x = event.clientX - this.rect.left;
      this.y = event.clientY - this.rect.top;
    });
  }
}
