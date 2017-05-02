import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
	
	render(){
		let categoryItems = _.map(this.props.contents, (category) =>{
			let imgUrl = 'http:' + category.fields.icon.fields.file.url;
			return(
				<div className="category col-sm-6 col-md-4 col-lg-3 text-center" key={category.sys.id}>
					<h3>{category.fields.title}</h3>
					<img className="icon" src={imgUrl}/>
					<p>{category.fields.categoryDescription}</p>
				</div>
			)			
		})
		return(
			<div className="CategoryList">
				<button className="btn my-btn btn-success block-btn" onClick={()=>{this.props.back()}}>Back to Content Types</button>
				{categoryItems}
			</div>
		);
	}
}

CategoryList.propTypes = {
	contents: PropTypes.array
}

export default CategoryList;