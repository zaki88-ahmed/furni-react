import React, { Component }  from 'react';
import couch from '../../Images/couch.png';

class Banner extends Component{
  render(){

      return <div class="hero">
	  <div class="container">
		  <div class="row justify-content-between">
		  <div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Cart</h1>
							</div>
						</div>
			  <div class="col-lg-7">
				  <div class="hero-img-wrap">
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
		
  }
}

export default Banner;