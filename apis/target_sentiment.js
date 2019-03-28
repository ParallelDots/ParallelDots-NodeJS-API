const request = require('request');

let target_sentiment = function(text,lang_code,API_KEY,entity){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'https://dev.apis.paralleldots.com/v4/target/sentiment', form: {text:text,lang_code:lang_code,api_key:API_KEY,entity:entity}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err});
			}
			resolve(body);
		 })
	})
}

module.exports = target_sentiment;
