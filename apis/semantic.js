const request = require('request');

let semantic = function(text1,text2,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		if(!text1 || typeof(text1) != "string" || !text2 || typeof(text2) != "string"){
			reject({error: 'Please provide a non-empty string'});
		}
		request.post({url:'http://apis.paralleldots.com/v4/similarity', form: {text_1:text1,text_2:text2,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = semantic;
