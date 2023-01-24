import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container, Main, Title } from '../components/Hero'
import { GlobalStyles } from '../styles/globalStyles'



const Obrigado = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Container>
          <Title>Obrigado, em breve entraremos em contato</Title>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Obrigado