import blackCircle from './objects/blackCircle'
import redSquare from './objects/redSquare'

export default class CanvasRender {
  private container: HTMLElement
  private canvas: HTMLCanvasElement
  constructor () {
    this.canvas = document.createElement('canvas')
    const container = document.createElement('div')
    container.setAttribute('style', `
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `)
    this.canvas.setAttribute('style', `
      border: 1px solid gray;
    `)
    this.canvas.width = 300
    this.canvas.height = 300
    container.appendChild(this.canvas)
    container.style.overflow = 'hidden'
    this.container = container
  }

  clearCanvas() {
    const context = this.canvas.getContext('2d')
    if (context) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      context.beginPath()
    }
  }

  getCanvasContainer() {
    return this.container
  }

  render(objectId: string) {
    switch (objectId) {
      case 'redSquare' : redSquare(this.canvas); break;
      case 'blackCircle': blackCircle(this.canvas); break
    }
  }
}