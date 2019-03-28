const pd = require('./paralleldots');
pd.apiKey = "Paste here your api_key";


pd.sentiment('Team performed well overall.','en')
	.then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
    })
    
var text_array=JSON.stringify(["Come on,lets play together","Team performed well overall."]);
pd.sentimentBatch(text_array,'en')
    .then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })

pd.target_sentiment('Come on lets play together.','en','play')
	.then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
    })

var text_array=JSON.stringify(["Come on,lets play together","Team performed well overall."]);
pd.target_sentimentBatch(text_array,'en','play')
    .then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })
pd.sarcasm('I am trying to imagine you with a personality.')
	.then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
    })

var text_array=JSON.stringify(["Come on,lets play together","Team performed well overall."]);
pd.sarcasmBatch(text_array)
	.then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
    })
pd.usage()
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

 pd.abuse("I was not very impressed with the band's performance this year")
 	.then((response) => {
 		console.log(response);
 	})
 	.catch((error) => {
 		console.log(error);
 	})

var text_array=JSON.stringify(["you f**king a$$hole.","fuck this shit."]);
pd.abuseBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })

pd.semantic('Global warming set to exceed Paris agreement’s 1.5C limit by 2040s, according to draft UN report','There is a tipping point’: UN warns climate change goals laid out in Paris accord are almost out of reach')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})


pd.ner('When Michael Jordan was at the peak of his powers as an NBA superstar, his Chicago Bulls teams were mowing down the competition, winning six National Basketball Association titles and setting a record for wins in a season that was broken by the Golden State Warriors two seasons ago.')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

var text_array=JSON.stringify(["Apple was founded by Steve Jobs.","Apple Inc. is an American multinational technology company headquartered in Cupertino, California"]);
pd.nerBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })

pd.emotion("I am trying to imagine you with a personality.","en")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
    })

var text_array=JSON.stringify(["I am trying to imagine you with a personality.","This is shit."]);
pd.emotionBatch(text_array,'en')
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })

pd.intent('How do I cancel my ticket from the app?')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

var text_array=JSON.stringify(["How do I cancel my ticket from the app?","20% off on your next Uber ride?"]);
pd.intentBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })

pd.keywords('For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

var text_array=JSON.stringify(["For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.","U.S. stocks edged higher on Friday, with the S&P 500 hitting a more than five-month high, as gains in industrials and other areas offset a drop in financials. Fred Katayama reports."]);
pd.keywordsBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
        console.log(error);
    })

pd.multilangKeywords("C'est un environnement très hostile, si vous choisissez de débattre ici, vous serez vicieusement attaqué par l'opposition.","fr")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.taxonomy('Deutsche Bank CEO sees far fewer than 4,000 Brexit-related moves: paper')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})
var text_array=JSON.stringify(["For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.","U.S. stocks edged higher on Friday, with the S&P 500 hitting a more than five-month high, as gains in industrials and other areas offset a drop in financials. Fred Katayama reports."]);
pd.taxonomyBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })


const category = {
	"finance": [ 
			"markets", 
			"economy", 
			"shares" 
		], 
	"world politics": [ 
			"diplomacy", 
			"UN", 
			"war" 
		], 
	"india": [ 
			"congress", 
			"india", 
			"bjp" 
		] 
}

pd.customClassifier('Prime Minister Narendra Modi tweeted a link to the speech Human Resource Development Minister Smriti Irani made in the Lok Sabha during the debate on the ongoing JNU row and the suicide of Dalit scholar Rohith Vemula at the Hyderabad Central University.',category)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.phraseExtractor('For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

var text_array=JSON.stringify(["For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.","U.S. stocks edged higher on Friday, with the S&P 500 hitting a more than five-month high, as gains in industrials and other areas offset a drop in financials. Fred Katayama reports."]);
pd.phraseExtractorBatch(text_array)
 .then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
  })

pd.facialEmotion('image-file.jpg',type='local')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })  

pd.facialEmotion('https://dxs1x0sxlq03u.cloudfront.net/sites/default/files/article-image/eminence-organics-acne-face-mapping.jpg',type='url')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })  
pd.objectRecognizer('image-file.jpg',type='local')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.objectRecognizer('https://dxs1x0sxlq03u.cloudfront.net/sites/default/files/article-image/eminence-organics-acne-face-mapping.jpg',type='url')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

