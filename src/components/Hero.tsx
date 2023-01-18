import React from 'react'
import styled from 'styled-components'

import Form from './Form'
import background from '../assets/background.png'

export const Main = styled.main`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 80vh;
`

export const Container = styled.div`
  width: 35em;
  margin-left: 17em;
  padding-left: 4.5em;
`

export const Title = styled.h1`
  color: var(--text-color);
  font-size: 55px;
  font-weight: 700;
  width: 9em;
`

export const Paragraph = styled.p`
  color: var(--text-color);
  font-size: 20px;
  line-height: 33px;
  font-weight: 300;
  padding-top: 1em;
`


const Hero = () => {
  return (
    <Main>
      <Container>
        <Title>É tipo um banco,
        só que <u>melhor.</u></Title>
        <Paragraph>
          Da estruturação dos seus objetivos de vida, até a materialização do seu plano financeiro.
        </Paragraph> 
        <br/>
        <Paragraph>
          Da alocação dos seus investimentos no Brasil e no exterior, até a proteção da sua vida e do seu patrimônio. 
          Para a sua empresa e para a sua pessoa física.
        </Paragraph>
      </Container>
      <Form />
    </Main>
  )
}

export default Hero