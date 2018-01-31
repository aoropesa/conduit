var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

router.get('/', function(req, res, next) {
  Article.findById()
    .distinct('taglist')
    .then(function(tags) {
      return res.json({ tags: tags });
    })
    .catch(next);
});

module.exports = router;
