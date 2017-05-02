import axios from 'axios';
import config from '../config';

const contentfulUrl = '/api/entries';
export const fetchContentTypes = () => {
	return axios.get(contentfulUrl)
		.then(response => response.data)
		.catch(error => console.log(error));
}

export const fetchContentTypeEntries = (type) =>{
	return axios.get(contentfulUrl + '/' + type)
		.then(response => response.data)
		.catch(error => console.log(error));
}