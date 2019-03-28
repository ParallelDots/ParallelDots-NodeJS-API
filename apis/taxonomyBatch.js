const request = require('request');

let taxonomyBatch = function(text_list,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
        }
        var text=JSON.stringify(text_list);
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
        }
		request.post({url:'http://apis.paralleldots.com/v4/taxonomy_batch', form: {text:JSON.parse(text),api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err});
			}
			resolve(body);
		 })
	})
}

module.exports = taxonomyBatch;
