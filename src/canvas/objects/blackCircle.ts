export default (canvas: HTMLCanvasElement) => {
  const object = canvas.getContext('2d')
  if (object) {
    object.strokeStyle = 'black'
    object.lineWidth = 5
    object.beginPath()
    // 원은 중심으로 부터 좌표
    object.arc(150, 150, 90, (Math.PI/180) * 0, (Math.PI/180) * 360, false)
    object.stroke()
    object.closePath()
  }
}