import React from 'react';
import PropTypes from 'prop-types';

class CategoryTypeList extends React.Component {

	render(){
		let categoryItems = _.map(this.props.contentTypes, (val, key) =>{
			return(
				<button className="btn my-btn btn-success" key={val} data-id={val} onClick={() => this.props.categoryTypeClick(key)}>
					{key}
				</button>
			)			
		})
		return(
			<div className="CategoryTypeList text-center">
				{categoryItems}
				<img className="random-img" src="https://i.redd.it/o1z2x7rilyuy.jpg" />
			</div>
		);
	}
}

CategoryTypeList.propTypes = {
	contentTypes: PropTypes.object
}

export default CategoryTypeList;