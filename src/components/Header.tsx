import React from "react";
import styled from 'styled-components'

const logo =  require("../assets/Logo.png")

export const HeaderComponent = styled.header`
  width: 100%;
  height: 20vh;
  display: flex;
  background-color: #081B1F;
  z-index: 50;
`

export const LogoComponent = styled.img`
  width: auto;
  height: 8vh;
  margin-top: 1.5em;
  margin-left: 15em;
`

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