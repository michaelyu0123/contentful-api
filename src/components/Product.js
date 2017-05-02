import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

	render(){
		let product = this.props.contents;
		let imgUrl = 'http:' + product.fields.image[0].fields.file.url;
		return(
			<div className="text-center">
				<button className="btn my-btn btn-success" onClick={()=>{this.props.back()}}>Back to Products</button>
				<div className="product">
					<h3>{product.fields.productName}</h3>
					<div className="product-image"><span className="helper"></span><img src={imgUrl} alt={product.fields.image[0].fields.file.title}/></div>
					<p><b>Category:</b> <span>{product.fields.categories[0].fields.title}</span></p>
			 		<p><b>Brand:</b> <span>{product.fields.brand.fields.companyName}</span></p>
			 		<p><b>Quantity:</b> {product.fields.quantity}</p>
			 		<p><b>Price:</b> ${product.fields.price.toFixed(2)}</p>
			 		<p><b>Product Description:</b> {product.fields.productDescription}</p>
				</div>
			</div>
		);
	}
};

Product.propTypes = {
	contents: PropTypes.object
}

export default Product;