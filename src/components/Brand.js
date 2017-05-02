import React from 'react';
import PropTypes from 'prop-types';

class Brand extends React.Component {

	render(){
		let product = this.props.contents;
		let imgUrl = 'http:' + product.fields.logo.fields.file.url;
		return(
			<div className="text-center">
				<button className="btn my-btn btn-success" onClick={()=>{this.props.back()}}>Back to Brands</button>
				<div className="Brand">
					<h3>{product.fields.companyName}</h3>
					<div className="logo"><span className="helper"></span><img src={imgUrl}/></div>
					<p><b>Company Email:</b> {product.fields.email}</p>
					<p><b>Company Website:</b> {product.fields.website}</p>
					<p><b>Company Description:</b> {product.fields.companyDescription}</p>
				</div>
			</div>
		);
	}
};

Brand.propTypes = {
	contents: PropTypes.object
}

export default Brand;