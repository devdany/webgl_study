import React from 'react'
import styled from 'styled-components'

type Props = {
  openObject: (objectId: string) => void
}

export default function LeftBar(props: Props){
  return (
    <Container>
      <ItemBox onClick={() => { props.openObject('redSquare') }}>
        <ItemText>Red Square</ItemText>
      </ItemBox>
      <ItemBox onClick={() => { props.openObject('blackCircle') }}>
        <ItemText>Black Circle</ItemText>
      </ItemBox>
    </Container>
  )
}

const Container = styled.div`
  width: 150px;
  height: 100%;
  border: 1px solid #DDDDDD;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ItemBox = styled.div`
  flex: 0 0 32px;
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #ddd;
  }
`

const ItemText = styled.span`
  font-size: 15px;
  color: #000000;
  font-weight: 400;
`
