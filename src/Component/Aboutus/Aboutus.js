import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import Banner from './Banner';
import Product from './Product';
import Choose from './Choose';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Footer from './Footer';
import Team from './Team';

class Aboutus extends Component{
	render(){
  
		return <div>
		  
		  <Banner/>
		  <Product/>
		  <Choose/>
		  <Team/>
		  <Testimonial/>
		  <Blog/>
		  <Footer/>
		  	
		</div>
  
	}
  }

export default Aboutus;