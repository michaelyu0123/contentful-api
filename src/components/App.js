import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import Header from './Header'
import _ from 'lodash';
import CategoryTypeList from './CategoryTypeList';
import CategoryList from './CategoryList';
import BrandList from './BrandList';
import ProductList from './ProductList';

class App extends React.Component{

	state = {
		data : [{init: 'init'}],
	}

	componentDidMount(){
		api.fetchContentTypes()
			.then((contentTypes)=>{
				this.setState({
					data: [contentTypes]
				});
			})
			.catch(error => console.log(error));
	}

	pageHeader(){
		if(this.state.currentContentType){
			return this.state.currentContentType;
		}
		return 'Contentful Testing';
	}

	currentContent(){
		let typeList = <CategoryTypeList contentTypes={this.state.data[0]} categoryTypeClick={this.changeCategoryType} />;
		if(this.state.currentContentType){
			switch(this.state.currentContentType){
				case "Category":
					return (
						<div>
							<CategoryList contents={this.state.Category.contentTypeEntries} back={()=>{this.clearCategory()}} />
						</div>
						)
				case "Brand":
					return (
						<div>
							<BrandList contents={this.state.Brand.contentTypeEntries} back={()=>{this.clearCategory()}}/>
						</div>
						)
				case "Product":
					return (
						<div>
							<ProductList contents={this.state.Product.contentTypeEntries}  selectBrand={this.selectBrand} back={()=>{this.clearCategory()}}/>
						</div>
						)
				default :
					return typeList;
			}

		}
		return typeList;
	
	}

	changeCategoryType = (type) => {
		if(!this.state[type]){
			api.fetchContentTypeEntries(type)
				.then((contentTypeEntries)=>{
					let newState = {
						data: this.state.data,
						currentContentType: type
					}
					newState[type] = {contentTypeEntries}
					this.setState(newState);
				})
		}else{
			let currState = this.state;
			currState.currentContentType = type;
			this.setState(currState);
		}
	}

	clearCategory = () => {
		let currState = this.state;
		currState.currentContentType = false;
		this.setState(currState);
	}

	render(){

		return(
			<div className="App">
				<div className="container">
					<Header message={this.pageHeader()}/>
					{this.currentContent()}
				</div>
				
			</div>
		)
	}
}

export default App;