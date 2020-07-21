import React, { useEffect, useRef } from 'react'
import { loadCanvas, render } from './Loader'

import styled from 'styled-components'

type Props = {
  objectId: string
}

export default function Canvas(props: Props) {
  const canvasRef = useRef(null)
  useEffect(() => {
    loadCanvas(canvasRef.current)
  }, [])

  useEffect(() => {
    if (props.objectId !== '') {
      render(props.objectId)
    }
  }, [props.objectId])
  return (
    <CanvasContainer ref={canvasRef} />
  )
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`
