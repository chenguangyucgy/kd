var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'inset' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
    db.user.find({name:req.body.name},function(err,doc){
    assert.equal(err,null);
    res.render('retrieve',{title:'Retrieve',infos:doc});
  });
});

module.exports = router;
