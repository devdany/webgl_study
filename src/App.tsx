import React, { useState } from 'react'

import Canvas from './canvas'
import Leftbar from './components/leftbar'
import styled from 'styled-components'

function App() {
  const [objectId, setObjectId] = useState('')

  return (
    <MainContainer>
      <Leftbar openObject={setObjectId} />
      <Canvas objectId={objectId} />
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

