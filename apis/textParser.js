const request = require('request');

let textParser = function(text,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'http://apis.paralleldots.com/v4/text_parser', form: {text:text,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = textParser;
