import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import truck from '../../Images/truck.svg';
import bag from '../../Images/bag.svg';
import support from '../../Images/support.svg';
import reeturn from '../../Images/return.svg';
import choose from '../../Images/why-choose-us-img.jpg';

class Choose extends Component{
  render(){

	return <div class="why-choose-section">
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-lg-6">
				<h2 class="section-title">Why Choose Us</h2>
				<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

				<div class="row my-5">
					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
								<img src={truck} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
								<img src={bag} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
								<img src={support} alt="Image" class="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
								<img src={reeturn} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			</div>

			<div class="col-lg-5">
				<div class="img-wrap">
					<img src={choose} alt="Image" class="img-fluid"/>
				</div>
			</div>

		</div>
	</div>
</div>

		
  }
}

export default Choose;