var express = require('express');
var router = express.Router();
var Sentence = require('../models/sentence.js');

/* GET sentences listing. */
router.get('/', function (req, res, next) {
    Sentence.find({}, function (err, sentences) {
        if (err) {
            throw err;
        }
        res.send(sentences);
    });
});

router.post('/', function (req, res, next) {
    var newSentence = Sentence({
        text: req.body.text,
        date: new Date()
    });
    newSentence.save(function (err) {
        if (err) {
            throw err;
        }
        res.send(200);
    });
});

router.delete('/', function (req, res, next) {
    Sentence.findOneAndRemove({_id: req.body.id}, function (err, sentence) {
        if (err) {
            throw err;
        }
    });
    res.send(200);
});

module.exports = router;
