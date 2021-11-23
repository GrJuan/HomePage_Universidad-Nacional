import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'

import Navigation from './components/Navigation'
import SoyUnal from './components/SoyUnal';
import HeaderBottom from './components/HeaderBottom';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <SoyUnal/>
      <HeaderBottom/>
      <Wrapper/>
      <Slider/>
      <Footer/>
    </Router>
    
  );
}

export default App;
