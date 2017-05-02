'use strict'
import express from 'express';
import contentful from 'contentful';
import config from '../config';
import _ from 'lodash';

const SPACE_ID = config.contentful.SPACE_ID;
const ACCESS_TOKEN = config.contentful.ACCESS_TOKEN;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})




const router = express.Router();

router.get('/entries/:contentTypes*?', (req, res) =>{

//Gets all the items in each content types.
	client.getContentTypes()
		.then((entry) => {
			if(req.params.contentTypes){
				let contentTypeId = _.filter(entry.items, (item)=>{
				return item.name.toLowerCase() === req.params.contentTypes.toLowerCase();
				});
				getEntryFromType(contentTypeId[0].sys.id);
			}else{
				let result = {};
				_.map(entry.items, (item)=>{
					result[item.name] = item.sys.id;
				});
				res.send(result);	
			}
			
		})
		.catch((error) => {
		  console.log(error);
		})

//Get the entries based on content type

	let getEntryFromType = (contentType) => {
		let query = {
			content_type: contentType
		}
		client.getEntries(query)
			.then((entry) => {
			  	res.send(entry.items);
			})
			.catch((error) => {
			  console.log(error);
			})
		}
});


module.exports = router;