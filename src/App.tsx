import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/globalStyles';
import LandingPage from './pages';

function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
    </>
  );
}

export default App;
