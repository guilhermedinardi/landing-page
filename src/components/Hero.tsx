import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  color: var(--text-color);
  font-size: 55px;
  font-weight: 700;
  width: 11em;
  padding-left: 1.3em;
}
`
export const Span = styled.span`
  text-decoration: underline 3px;
`
export const Paragraph = styled.p`
  color: var(--text-color);
  font-size: 20px;
  line-height: 33px;
  font-weight: 300;
`
export const Container = styled.div`
  width: 34em;
  padding-top: 3.5em;
  padding-left: 4.5em;

`

const Hero = () => {
  return (
    <>
    <Title>É tipo um banco,
    só que <u>melhor.</u></Title>
    <Container>
      <Paragraph>
        Da estruturação dos seus objetivos de vida, até a materialização do seu plano financeiro.
      </Paragraph> 
      <br/>
      <Paragraph>
        Da alocação dos seus investimentos no Brasil e no exterior, até a proteção da sua vida e do seu patrimônio. 
        Para a sua empresa e para a sua pessoa física.
      </Paragraph>
    </Container>
    </>
  )
}

export default Hero