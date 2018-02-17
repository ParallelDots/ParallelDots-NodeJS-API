const usage = require('./apis/usage.js');
const sentiment = require('./apis/sentiment.js');
const abuse = require('./apis/abuse.js');
const semantic = require('./apis/semantic.js');
const ner = require('./apis/ner.js');
const emotion = require('./apis/emotion.js');
const intent = require('./apis/intent.js');
const keywords = require('./apis/keywords.js');
const taxonomy = require('./apis/taxonomy.js');
const sentimentSocial = require('./apis/sentimentSocial.js');
const multilingualSentiment = require('./apis/multilingualSentiment.js');
const customClassifier = require('./apis/customClassifier.js');

let paralleldots = {
	
	apiKey: undefined,

	usage: function(){
		return usage(this.apiKey);
	},

	sentiment: function(text){
		return sentiment(text,this.apiKey);
	},

	abuse: function(text){
		return abuse(text,this.apiKey);
	},

	semantic: function(text1,text2){
		return semantic(text1,text2,this.apiKey)
	},

	ner: function(text){
		return ner(text,this.apiKey)
	},

	emotion: function(text){
		return emotion(text,this.apiKey)
	},

	intent: function(text){
		return intent(text,this.apiKey)
	},

	keywords: function(text){
		return keywords(text,this.apiKey)
	},

	taxonomy: function(text){
		return taxonomy(text,this.apiKey)
	},

	sentimentSocial: function(text){
		return sentimentSocial(text,this.apiKey)
	},

	multilingualSentiment: function(text,code){
		return multilingualSentiment(text,code,this.apiKey)
	},

	customClassifier:function(text,id){
		return customClassifier(text,id,this.apiKey);
	}

}

module.exports = paralleldots;