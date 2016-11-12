var mongoose = require('mongoose');
var Produttore = require('./produttore.model');

module.exports = function() {

    var list = function(req, res) {
        Produttore.find().exec()
            .then(function(data) {
                res.json(data);
            });
    };

    var detail = function(req, res) {
        var id = req.params.id;
        Produttore.findById(id)
            .populate('produzione')
            .exec()
            .then(function(data) {
                res.status(200).send(data);
            },function(data) {
                res.status(404).send({'error':'Produttore non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    var create = function(req, res) {
        var newProduttore = new Produttore(req.body);
        newProduttore.save()
            .then(function(data) {
                res.status(200).send(data);
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };
    
    var update = function(req, res) {
        var id = req.params.id;
        Produttore.findByIdAndUpdate(id, req.body, {new: true})
            .then(function(data) {
                res.status(200).send(data);
            },function() {
                res.status(404).send({'error':'Produttore non trovato nel database'});
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    var remove = function(req, res) {
        var id = req.params.id;
        Produttore.findById(id).exec()
            .then(function(hero) {
                return hero.remove();
            })
            .then(function() {
                res.status(200).send('Produttore rimosso dal database');
            }, function() {
                res.status(404).send({'error':'Produttore non trovato nel database'});
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
