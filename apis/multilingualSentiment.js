const request = require('request');

let multilingualSentiment = function(text,lang_code,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		if(lang_code != 'es' && lang_code != 'pt' && lang_code != 'cn'){
			reject({
				error: 'Please provide a valid language code. Valid language codes are "es" for Spanish, "pt" for Portuguese and "cn" for Chinese.'
			})
		}
		request.post({url:'http://apis.paralleldots.com/v4/multilang', form: {text:text,lang_code:lang_code,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = multilingualSentiment;
