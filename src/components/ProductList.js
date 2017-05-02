import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {

	state={}

	getProduct(product){
		this.setState({currentProduct : product});
	}

	clearProduct = () => {
		this.setState({currentProduct: false});
	}


	currentContent(){
		if(this.state.currentProduct){
			return(
				<Product contents={this.state.currentProduct} back={this.clearProduct} />
			)
		}else{
			let ProductItems = _.map(this.props.contents, (product) =>{
			let imgUrl = 'http:' + product.fields.image[0].fields.file.url;

			return(
					<div className="product col-sm-6 col-md-4 col-lg-3 text-center" key={product.sys.id} onClick={()=>{this.getProduct(product)}}>
						<h3>{product.fields.productName}</h3>
						<div className="product-image"><span className="helper"></span><img src={imgUrl} alt={product.fields.image[0].fields.file.title}/></div>
						
					</div>
				)			
			})
			return(
				<div className="ProductList">
					<button className="btn my-btn btn-success block-btn" onClick={()=>{this.props.back()}}>Back to Content Types</button>
					{ProductItems}
				</div>
			);
		}
	}

	render(){
		return(
			<div>
				<div>
					{this.currentContent()}
				</div>
			</div>
		);
	}
}

ProductList.propTypes = {
	contents: PropTypes.array
}

export default ProductList;