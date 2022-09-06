import React, { Component }  from 'react';
// import LogoImage from '../Images/logo.png';

import product_1 from '../../Images/product-1.png';
import product_2 from '../../Images/product-2.png';
import product_3 from '../../Images/product-3.png';

class Popular extends Component{
  render(){

	return <div class="popular-product">
	<div class="container">
		<div class="row">

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
						<img src={product_1} alt="Image" class="img-fluid"/>
					</div>
					<div class="pt-3">
						<h3>Nordic Chair</h3>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
						<p><a href="#">Read More</a></p>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
						<img src={product_2} alt="Image" class="img-fluid"/>
					</div>
					<div class="pt-3">
						<h3>Kruzo Aero Chair</h3>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
						<p><a href="#">Read More</a></p>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
						<img src={product_3} alt="Image" class="img-fluid"/>
					</div>
					<div class="pt-3">
						<h3>Ergonomic Chair</h3>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
						<p><a href="#">Read More</a></p>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

		
  }
}

export default Popular;