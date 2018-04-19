var fs = require("fs");
var request = require("request");

let facialEmotion = function(image_path,API_KEY){
	return new Promise((resolve,reject) => {
		if(typeof(image_path) == "string" && image_path.length>0){
			var options = { 
				method: 'POST',
				url: 'https://apis.paralleldots.com/v3/facial_emotion',
				headers: 
				{
					'cache-control': 'no-cache',
					'content-type': 'multipart/form-data;' 
				},
				formData: 
				{ 
					api_key: API_KEY ,
					file: 
					{ 
						value: fs.createReadStream(image_path),
						options: 
						{ 
							filename: image_path.split('/').splice(-1).toString(),
							contentType: null 
						} 
					} 
				} 
			};
			request(options, function (error, response, body) {
				if (error) reject({"Error":error});
				resolve(body);
			});
		}
		else{
			reject({"Error":"Please provide the path of image file"})
		}
	})
}


module.exports = facialEmotion;