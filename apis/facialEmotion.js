var fs = require("fs");
var request = require("request");

let facialEmotion = function(image_path,type,API_KEY){
	return new Promise((resolve,reject) => {
		
		if(typeof(image_path) == "string" && image_path.length>0){
			if(type=='local'){
			var options = { 
				method: 'POST',
				url: 'http://apis.paralleldots.com/v4/facial_emotion',
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
		}
		else{
				var options = { 
				method: 'POST',
				url: 'https://apis.paralleldots.com/v3/facial_emotion',
				headers: 
					{ 
					'Cache-Control': 'no-cache',
					'content-type': 'multipart/form-data;' },
				formData: 
				
				{ url: image_path,
				api_key:API_KEY  } };
		}
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
