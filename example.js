const pd = require('./paralleldots');
const path = require('path');

// Be sure to set your API key
pd.apiKey = "YOUR API KEY";

// Calls to the API return promises

pd.usage()
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})


// language parameter is optional, by default "en" is passed.

pd.sentiment('Team performed well overall.','en')
	.then((response) => {
		console.log(response);
	}).catch((error) =>{
		console.log(error);
	})

pd.abuse("I was not very impressed with the band's performance this year")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
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


pd.emotion("I am trying to imagine you with a personality.","en")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.emotion("C'est un environnement très hostile, si vous choisissez de débattre ici, vous serez vicieusement attaqué par l'opposition.","fr")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.intent('How do I cancel my ticket from the app?')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.keywords('For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
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

pd.multilingualSentiment('Barcelona es una ciudad hermosa','es')
	.then((response) => {
		console.log(response);
	})
	.catch((err) =>{
		console.log(err);
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

pd.textParser('For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.')
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

const file_path = path.join(__dirname,'image-file.jpg');

pd.popularity(file_path)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.nsfw(file_path)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.facialEmotion(file_path)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.objectRecognizer(file_path)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})