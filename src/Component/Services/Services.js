import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import Banner from './Banner';
import Product from './Product';
import Choose from './Choose';
import Testimonial from './Testimonial';
import Footer from './Footer';

class Services extends Component{
	render(){
  
		return <div>
		  
		  <Banner/>
		  <Choose/>
		  <Product/>
		  <Testimonial/>
		  <Footer/>
		  	
		</div>
  
	}
  }

export default Services;