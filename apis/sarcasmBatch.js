const request = require('request');

let sarcasmBatch = function(text_list,lang_code,API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
        }
        var text=JSON.stringify(text_list);
		if(!text || typeof(text) != "string"){
			reject({error: 'Please provide a non-empty string'});
        }
		request.post({url:'https://apis.paralleldots.com/v4/sarcasm_batch', form: {text:JSON.parse(text),lang_code:lang_code,api_key:API_KEY}}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err});
			}
			resolve(body);
		 })
	})
}

module.exports = sarcasmBatch;
