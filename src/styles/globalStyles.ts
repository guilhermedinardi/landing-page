import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --primary-color: #081B1F;
    --second-color: #E50F45;
    --text-color: #ffffff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #081B1F;
  }
  html{

    @media(max-width: 1440px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    --webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`