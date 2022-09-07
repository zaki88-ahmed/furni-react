import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Index from './Component/Index/Index';
import Shop from './Component/Shop/Shop';
import Navbar from './Component/Navbar';
import Aboutus from './Component/Aboutus/Aboutus';
import Cart from './Component/Cart/Cart';

class App extends Component{
  render(){

      return <div>
        <Navbar/>
        {/* <Index/> */}
        {/* <Shop/> */}
        {/* <Aboutus/> */}
        <Cart/>
      </div>

  }
}

export default App;
