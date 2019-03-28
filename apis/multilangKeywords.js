const request = require('request');

let multilangKeywords = function(text,lang_code,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'https://apis.paralleldots.com/v4/multilang_keywords', form: {text:text,lang_code:lang_code,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = multilangKeywords;
