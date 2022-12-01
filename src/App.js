import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutCorona from './components/AboutCorona';
import Symptoms from './components/Symptoms';
import React from 'react';
import AboutCorona2 from './components/AboutCorona2';
import Prevention from './components/Prevention';
import Prevention2 from './components/Prevention2';
import Prevention3 from './components/Prevention3';
import Treatment from './components/Treatment';
import Treatment2 from './components/Treatment2';
import QAndA from './components/QAndA';
import News from './components/News';
import Footer from './components/Footer';




function App() {
  return (
    <>

      <Navbar></Navbar>
      <Home></Home>
      <AboutCorona></AboutCorona>
      <AboutCorona2></AboutCorona2>
      <Symptoms></Symptoms>
      <Prevention></Prevention>
      <Prevention2></Prevention2>
      <Prevention3></Prevention3>
      <Treatment></Treatment>
      <Treatment2></Treatment2>
      <QAndA></QAndA>
      <News></News>
      <Footer></Footer>

    </>
  );
}

export default App;
