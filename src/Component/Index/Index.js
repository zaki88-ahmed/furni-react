import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import Banner from './Banner';
import Product from './Product';
import Choose from './Choose';
import Help from './Help';
import Popular from './Popular';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Footer from './Footer';

class Index extends Component{
	render(){
  
		return <div>
		  
		  <Banner/>
		  <Product/>
		  <Choose/>
		  <Help/>
		  <Popular/>
		  <Testimonial/>
		  <Blog/>
		  <Footer/>
		  	
		</div>
  
	}
  }

export default Index;