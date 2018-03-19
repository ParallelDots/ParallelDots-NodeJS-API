const usage = require('./apis/usage.js');
const sentiment = require('./apis/sentiment.js');
const abuse = require('./apis/abuse.js');
const semantic = require('./apis/semantic.js');
const ner = require('./apis/ner.js');
const emotion = require('./apis/emotion.js');
const intent = require('./apis/intent.js');
const keywords = require('./apis/keywords.js');
const mulitlangKeywords = require('./apis/multilangKeywords.js');
const taxonomy = require('./apis/taxonomy.js');
const multilingualSentiment = require('./apis/multilingualSentiment.js');
const customClassifier = require('./apis/customClassifier.js');
const textParser = require('./apis/textParser.js');
const phraseExtractor = require('./apis/phraseExtractor.js');
const popularity = require('./apis/popularity.js');
const nsfw = require('./apis/nsfw.js');

let paralleldots = {
	
	apiKey: undefined,

	usage: function(){
		return usage(this.apiKey);
	},

	sentiment: function(text,lang_code='en'){
		return sentiment(text,lang_code,this.apiKey);
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

	emotion: function(text,lang_code="en"){
		return emotion(text,lang_code,this.apiKey)
	},

	intent: function(text){
		return intent(text,this.apiKey)
	},

	keywords: function(text){
		return keywords(text,this.apiKey)
	},

	multilangKeywords: function(text,lang_code="en"){
		return keywords(text,lang_code,this.apiKey)
	},

	taxonomy: function(text){
		return taxonomy(text,this.apiKey)
	},

	multilingualSentiment: function(text,code){
		return multilingualSentiment(text,code,this.apiKey)
	},

	customClassifier:function(text,category){
		return customClassifier(text,category,this.apiKey);
	},

	textParser:function(text){
		return textParser(text,this.apiKey);
	},

	phraseExtractor:function(text){
		return phraseExtractor(text,this.apiKey);
	},

	popularity:function(file_path){
		return popularity(file_path,this.apiKey);
	},

	nsfw:function(file_path){
		return nsfw(file_path,this.apiKey);
	}

}

module.exports = paralleldots;