import { createGlobalStyle } from 'styled-components'
import NeueMachina from '../assets/fonts/NeueMachina-Regular.otf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "NeueMachina";
    src: local("NeueMachina"), url(${NeueMachina});
  }
  :root{
    --primary-color: #081B1F;
    --second-color: #E50F45;
    --text-color: #ffffff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: NeueMachina;
  }
  a {
    text-decoration: none;
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
    font-family: NeueMachina;
    font-weight: 300;
  }
`