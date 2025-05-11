import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CardsGroup from './components/Card'; 
import Footer from './components/Footer'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  
    <Navbar/>
    <Hero/>
    <CardsGroup />
    <Footer/>

 
     
  </React.StrictMode>,
)
