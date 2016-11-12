var mongoose = require('mongoose');
var Produzione = require('./produzione.model');

module.exports = function() {

    var list = function(req, res) {
        Produzione.find().exec()
            .then(function(data) {
                res.json(data);
            });
    };

    var detail = function(req, res) {
        var id = req.params.id;
        Produzione.findById(id)
            .exec()
            .then(function(data) {
                res.status(200).send(data);
            },function(data) {
                res.status(404).send({'error':'Produzione non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    var create = function(req, res) {
        var newProduzione = new Produzione(req.body);
        newProduzione.save()
            .then(function(data) {
                res.status(200).send(data);
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };
    
    var update = function(req, res) {
        var id = req.params.id;
        Produzione.findByIdAndUpdate(id, req.body, {new: true})
            .then(function(data) {
                res.status(200).send(data);
            },function() {
                res.status(404).send({'error':'Produzione non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    var remove = function(req, res) {
        var id = req.params.id;
        Produzione.findById(id).exec()
            .then(function(hero) {
                return hero.remove();
            })
            .then(function() {
                res.status(200).send('Produzione rimosso dal database');
            }, function() {
                res.status(404).send({'error':'Produzione non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    return {
        list: list,
        detail: detail,
        create: create,
        remove: remove,
        update: update
    }
};
