const usage = require('./apis/usage.js');
const sentiment = require('./apis/sentiment.js');
const sentimentBatch = require('./apis/sentimentBatch.js');
const target_sentiment = require('./apis/target_sentiment.js');
const target_sentimentBatch = require('./apis/target_sentimentBatch.js');
const sarcasm = require('./apis/sarcasm.js');
const sarcasmBatch = require('./apis/sarcasmBatch.js');
const abuse = require('./apis/abuse.js');
const abuseBatch = require('./apis/abuseBatch.js');
const semantic = require('./apis/semantic.js');
const ner = require('./apis/ner.js');
const nerBatch = require('./apis/nerBatch.js');
const emotion = require('./apis/emotion.js');
const emotionBatch = require('./apis/emotionBatch.js');
const intent = require('./apis/intent.js');
const intentBatch = require('./apis/intentBatch.js');
const keywords = require('./apis/keywords.js');
const keywordsBatch = require('./apis/keywordsBatch.js');
const mulitlangKeywords = require('./apis/multilangKeywords.js');
const taxonomy = require('./apis/taxonomy.js');
const taxonomyBatch = require('./apis/taxonomyBatch.js');
const multilingualSentiment = require('./apis/multilingualSentiment.js');
const customClassifier = require('./apis/customClassifier.js');
const textParser = require('./apis/textParser.js');
const phraseExtractor = require('./apis/phraseExtractor.js');
const phraseExtractorBatch = require('./apis/phraseExtractorBatch.js');
const languageDetection = require('./apis/languageDetection.js');
const languageDetectionBatch = require('./apis/languageDetectionBatch.js');
const popularity = require('./apis/popularity.js');
const nsfw = require('./apis/nsfw.js');
const facialEmotion = require('./apis/facialEmotion.js');
const objectRecognizer = require('./apis/objectRecognizer.js');

let paralleldots = {
	
	apiKey: undefined,

	usage: function(){
		return usage(this.apiKey);
	},

	sentiment: function(text,lang_code='en'){
		return sentiment(text,lang_code,this.apiKey);
	},
	
	sentimentBatch: function(text,lang_code='en'){
		return sentimentBatch(text,lang_code,this.apiKey);
	},

	target_sentiment: function(text,entity){
		return target_sentiment(text,this.apiKey,entity);
	},
	target_sentimentBatch: function(text,entity){
		return target_sentimentBatch(text,this.apiKey,entity);
	},
	sarcasm: function(text,lang_code="en"){
		return sarcasm(text,lang_code,this.apiKey);
	},
	sarcasmBatch: function(text,lang_code="en"){
		return sarcasmBatch(text,lang_code,this.apiKey);
	},
	abuse: function(text){
		return abuse(text,this.apiKey);
	},

	abuseBatch: function(text){
		return abuseBatch(text,this.apiKey);
	},

	semantic: function(text1,text2){
		return semantic(text1,text2,this.apiKey)
	},

	ner: function(text,lang_code="en"){
		return ner(text,lang_code,this.apiKey)
	},

	nerBatch: function(text,lang_code="en"){
		return nerBatch(text,lang_code,this.apiKey)
	},

	emotion: function(text,lang_code="en"){
		return emotion(text,lang_code,this.apiKey)
	},

	emotionBatch: function(text,lang_code="en"){
		return emotionBatch(text,lang_code,this.apiKey)
	},

	intent: function(text){
		return intent(text,this.apiKey)
	},
	
	intentBatch: function(text){
		return intentBatch(text,this.apiKey)
	},

	keywords: function(text){
		return keywords(text,this.apiKey)
	},
	keywordsBatch: function(text){
		return keywordsBatch(text,this.apiKey)
	},


	multilangKeywords: function(text,lang_code="en"){
		return mulitlangKeywords(text,lang_code,this.apiKey)
	},

	taxonomy: function(text){
		return taxonomy(text,this.apiKey)
	},

	taxonomyBatch: function(text){
		return taxonomyBatch(text,this.apiKey)
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

	phraseExtractorBatch:function(text){
		return phraseExtractorBatch(text,this.apiKey);
	},

	languageDetection:function(text){
		return languageDetection(text,this.apiKey);
	},

	languageDetectionBatch:function(text){
		return languageDetectionBatch(text,this.apiKey);
	},

	popularity:function(file_path,type){
		return popularity(file_path,type,this.apiKey);
	},

	nsfw:function(file_path,type){
		return nsfw(file_path,type,this.apiKey);
	},

	facialEmotion:function(file_path,type){
		return facialEmotion(file_path,type,this.apiKey);
	},

	objectRecognizer:function(file_path,type){
		return objectRecognizer(file_path,type,this.apiKey);
	}

}

module.exports = paralleldots;
