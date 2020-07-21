import Renderer from './CanvasRender'

let canvasRender: Renderer | null = null

export const loadCanvas = (container: HTMLElement | null) => {
  if (container) {
    canvasRender = new Renderer()
    container.appendChild(canvasRender.getCanvasContainer())
  }
}

export const render = (objectId: string) => {
  if (canvasRender) {
    canvasRender.clearCanvas()
    canvasRender.render(objectId)
  }
}