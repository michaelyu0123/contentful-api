import React from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';

class BrandList extends React.Component {

	state={}

	getBrand(product){
		this.setState({currentBrand : product});
	}

	clearBrand = () => {
		this.setState({currentBrand: false});
	}

	currentContent(){
		if(this.state.currentBrand){
			return(
				<Brand contents={this.state.currentBrand} back={this.clearBrand}/>
			)
		}else{
			let brandList = _.map(this.props.contents, (product) =>{
				let imgUrl = 'http:' + product.fields.logo.fields.file.url;
				return(
					<div className="brand col-sm-6 col-md-4 col-lg-3 text-center" key={product.sys.id} onClick={()=>{this.getBrand(product)}}>
						<h3>{product.fields.companyName}</h3>
						<div className="logo"><span className="helper"></span><img src={imgUrl}/></div>
					</div>
				)			
			});
			return(
				<div>
					<button className="btn my-btn block-btn btn-success" onClick={()=>{this.props.back()}}>Back to Content Types</button>
					{brandList}
				</div>
				);
		}
	}
	render(){
		return(
			<div>
				<div className="BrandList">
					{this.currentContent()}
				</div>
			</div>
		);
	}
}

BrandList.propTypes = {
	contents: PropTypes.array
}

export default BrandList;