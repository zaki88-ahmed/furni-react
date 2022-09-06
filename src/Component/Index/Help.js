import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import img_grid_1 from '../../Images/img-grid-1.jpg';
import img_grid_2 from '../../Images/img-grid-2.jpg';
import img_grid_3 from '../../Images/img-grid-3.jpg';

class Help extends Component{
  render(){

	return <div class="we-help-section">
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-lg-7 mb-5 mb-lg-0">
				<div class="imgs-grid">
					<div class="grid grid-1"><img src={img_grid_1} alt="Untree.co"/></div>
					<div class="grid grid-2"><img src={img_grid_2} alt="Untree.co"/></div>
					<div class="grid grid-3"><img src={img_grid_3} alt="Untree.co"/></div>
				</div>
			</div>
			<div class="col-lg-5 ps-lg-5">
				<h2 class="section-title mb-4">We Help You Make Modern Interior Design</h2>
				<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

				<ul class="list-unstyled custom-list my-4">
					<li>Donec vitae odio quis nisl dapibus malesuada</li>
					<li>Donec vitae odio quis nisl dapibus malesuada</li>
					<li>Donec vitae odio quis nisl dapibus malesuada</li>
					<li>Donec vitae odio quis nisl dapibus malesuada</li>
				</ul>
				<p><a herf="#" class="btn">Explore</a></p>
			</div>
		</div>
	</div>
</div>

		
  }
}

export default Help;