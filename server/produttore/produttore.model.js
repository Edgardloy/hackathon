var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produttoreSchema = new Schema({
	paese: {type: String, require: true},
	azienda: {type: String, default: ''},
	nome: {type: String, require: true},
	cognome: {type: String, require: true},
	email: {type: String, require: true},
	telefono: {type: Number, require: true},
	indirizzio: {type: String, require: true},
	cap: {type: String, require: true},
	produzione: [{ type: Schema.Types.ObjectId, ref: 'Produzione' }]
});

// produttoreSchema.methods.getName = function(){
// 	return name;
// };

module.exports = mongoose.model('Produttore',produttoreSchema);