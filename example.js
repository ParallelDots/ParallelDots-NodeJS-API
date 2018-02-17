const pd = require('./paralleldots');

// Be sure to set your API key
pd.apiKey = "YOUR_API_KEY";

// Calls to the API return promises

pd.usage()
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})

pd.sentiment('Team performed well overall.')
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

pd.emotion('I am trying to imagine you with a personality.')
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

pd.taxonomy('Deutsche Bank CEO sees far fewer than 4,000 Brexit-related moves: paper')
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

pd.sentimentSocial('I left my camera at home')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})