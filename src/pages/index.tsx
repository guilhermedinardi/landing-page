import React from "react";
import Footer from "../components/Footer";
import Header  from '../components/Header'
import Hero from "../components/Hero";
import { GlobalStyles } from '../styles/globalStyles';

const LandingPage = () =>{
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
export default LandingPage