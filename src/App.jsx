import React from 'react'
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Error from './Error.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App


