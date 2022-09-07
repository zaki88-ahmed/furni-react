import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import Banner from './Banner';
import Footer from './Footer';
import Product from './Product';

class Cart extends Component{
	render(){
  
		return <div>
		  
		  <Banner/>
		  <Product/>
		  <Footer/>
		  	
		</div>
  
	}
  }

export default Cart;