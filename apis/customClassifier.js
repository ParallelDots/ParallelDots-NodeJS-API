const request = require('request');

let customClassifier = function(text,id,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!id){
			reject({
				error: 'Please provide a valid ID. Get your custom classifier id by loggin to your [dashboard](https://user.apis.paralleldots.com/login) and publishing your categories.'
			})
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'http://apis.paralleldots.com/v2/custom_classifier', form: {text:text,id:id,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = customClassifier;