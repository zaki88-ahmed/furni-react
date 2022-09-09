import React, { Component }  from 'react';
import userImage from '../Images/user.svg';
import cart from '../Images/cart.svg';
import {Link} from "react-router-dom";

class Navbar extends Component{
  render(){

	return <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

	<div class="container">
		<a class="navbar-brand" href="index.html">Furni<span>.</span></a>

		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarsFurni">
			<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
				<li class="nav-item active">
					{/* <a class="nav-link" href="index.html">Home</a> */}
					<Link class="navbar-brand" to="/">Home</Link>
				</li>
				<li>
					<Link class="nav-link" to="/shop">Shop</Link>
				</li>
				<li>
					<Link class="nav-link" to="/aboutus">About Us</Link>
				</li>
				<li>
					<Link class="nav-link" to="/services">Services</Link>
				</li>
				<li>
					<Link class="nav-link" to="/blog">Blog</Link>
				</li>

				
			</ul>

			<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
				<li><a class="nav-link" href="#"><img src={userImage}/></a></li>
				<li>
					<Link class="nav-link" to="/cart"><img src={cart}/></Link>
				</li>
			</ul>
		</div>
	</div>
		
</nav>

		
  }
}

export default Navbar;