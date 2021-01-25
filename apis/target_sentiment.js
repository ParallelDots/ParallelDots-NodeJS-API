const request = require('request');

let target_sentiment = function(text,API_KEY,aspect){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'https://apis.paralleldots.com/v4/target_sentiment', form: {text:text,api_key:API_KEY,aspect:aspect}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err});
			}
			resolve(body);
		 })
	})
}

module.exports = target_sentiment;
