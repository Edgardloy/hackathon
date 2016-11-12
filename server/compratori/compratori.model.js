var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SCHEMA
var compratoriSchema = new Schema({
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

module.exports = mongoose.model('Compratori',compratoriSchema);