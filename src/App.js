import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Index from './Component/Index/Index';
import Shop from './Component/Shop/Shop';
import Navbar from './Component/Navbar';
import Aboutus from './Component/Aboutus/Aboutus';
import Cart from './Component/Cart/Cart';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import Blog from './Component/Blog/Blog';
import {BrowserRouter, Route, Routes} from "react-router-dom";  

class App extends Component{
  render(){

    return <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={ <Index/> } />
        <Route path="/shop" element={ <Shop/> } />
        <Route path="/aboutus" element={ <Aboutus/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/blog" element={ <Blog/> } />

      </Routes>
      </BrowserRouter>


      // return <div>
      //   <Navbar/>
      //   {/* <Index/> */}
      //   {/* <Shop/> */}
      //   {/* <Aboutus/> */}
      //   {/* <Cart/> */}
      //   {/* <Contact/> */}
      //   {/* <Services/> */}
      //   <Blog/>
      // </div>

  }
}

export default App;
