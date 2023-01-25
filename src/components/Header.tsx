import React from "react";
import styled from 'styled-components'

import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <HeaderComponent>
      <a href="/" target="_blank" rel="noreferrer">
        <LogoComponent src={logo} alt='logo' />
      </a>
    </HeaderComponent>
  )
}
export default Header

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  background-color: #000;
`

export const LogoComponent = styled.img`
  width: auto;
  height: 4vh;
  margin-top: 1.5em;
  margin-left: 21.7em;

  @media(max-width: 770px){
    margin-left: 50%;
    margin-bottom: 1em;
  }

  @media (min-width: 880px) and (max-width: 1440px){
    margin-left: 12.5em;
  }
`