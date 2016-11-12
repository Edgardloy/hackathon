var mongoose = require('mongoose');
var Compratori = require('./compratori.model');

module.exports = function() {

    var list = function(req, res) {
        Compratori.find().exec()
            .then(function(data) {
                res.json(data);
            });
    };


    var detail = function(req, res) {
        Compratori.findById(req.params.id).exec()
            .then(function(data) {
                if (!data) {
                    return res.status(404).send('not found');
                }
                res.json(data);
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    var save = function(req, res) {
    	
    	if(req.body._id){

    	//SE ESISTE l'ID FA L' UPDATE
        Compratori.findByIdAndUpdate(req.body._id, req.body)
            .then(function() {
                res.status(200).send();
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    	} else {
    		//NON ESISTE l'ID QUINDI FA IL CREATE
    		req.body.id = mongoose.Types.ObjectId();
    		var newCompratoro = new Compratori(req.body);
    		newCompratoro.increseDamage();
    		newCompratoro.save()
            .then(function() {
                res.status(200).send();
            })
            .catch(function(err) {
                res.status(500).send(err);
            });

    	}
    };

    var remove = function(req, res){
    	Compratori.findById(req.params.id).exec()
    		 .then(function(data) {
    		 	return data.remove();
            }).then(function(){
                res.status(200).send();
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };


    return {
        list: list,
        detail: detail,
        save: save,
        remove: remove,
    }
};
