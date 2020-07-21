export default (canvas: HTMLCanvasElement) => {
  const object = canvas.getContext('2d')
  if (object) {
    object.fillStyle = 'rgb(255, 0, 0)'
    object.fillRect(100, 100, 100, 100)
  }
}