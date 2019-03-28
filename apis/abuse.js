const request = require('request');

let abuse = function(text,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'http://apis.paralleldots.com/v4/abuse',form:{text:text,api_key:API_KEY}}, function(err,httpResponse,body){
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		})
	})
}

module.exports = abuse;
