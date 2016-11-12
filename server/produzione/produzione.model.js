var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produzioneSchema = new Schema({
	tipo: {type: String, require: true},
	quantita: {type: Number, require: true},
	prezzo: {type: Number, require: true},
	dataOrdin: {type: Date, default: Date.now},
	dataFine: {type: Date, default: Date.now + 30}
});

// produttoreSchema.methods.getName = function(){
// 	return name;
// };

module.exports = mongoose.model('Produzione',produzioneSchema);