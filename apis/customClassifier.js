const request = require('request');

let customClassifier = function(text,category,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		// if(!id){
		// 	reject({
		// 		error: 'Please provide a valid ID. Get your custom classifier id by loggin to your [dashboard](https://user.apis.paralleldots.com/login) and publishing your categories.'
		// 	})
		// }
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		if(typeof(category) != "object"){
			reject({error: 'Please provide categories object as the 2nd argument.'})
		}
		category = JSON.stringify(category);
		request.post({url:'http://apis.paralleldots.com/v4/custom_classifier', form: {text:text,category:category,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = customClassifier;
