import styled from 'styled-components'

import Form from './Form'
import background from '../assets/background.png'

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

export const Main = styled.main`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  
  @media (max-width: 770px){
    max-width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

`
export const Container = styled.div`
  width: 35em;
  margin-left: 17em;
  padding-left: 4.5em;

  @media (max-width: 720px){
    width: 100vw;
    padding: 0px 20px;
    margin: 0;
  }

  @media (min-width: 880px) and (max-width: 1440px){
    padding-left: 2.5em;
    margin-left: 10em;
  }
`

export const Title = styled.h1`
  color: var(--text-color);
  font-size: 55px;
  font-weight: 700;
  width: 9em;

  @media (max-width: 770px){
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: var(--text-color);
  font-size: 20px;
  line-height: 33px;
  font-weight: 300;
  padding: 1em 0em;

  @media (max-width: 770px){
    font-size: 18px;
    line-height: 23px;
  }
  
`
export const Ball = styled.div`
top: 484px;
left: 1397px;
width: 693px;
height: 715px;
transform: matrix(-0.88, 0.47, -0.47, -0.88, 0, 0);
/* UI Properties */
background: transparent url('../assets/forma2.png') 0% 0% no-repeat padding-box;
opacity: 0.5;

`