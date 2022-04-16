var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var products = [
    {
      'name':"Iphone",
      "description": "Nice phone 1",
      'img-link':"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      'name':"Iphone 2",
      "description": "Nice phone 2",
      'img-link':"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      'name':"Iphone 3",
      "description": "Nice phone 3",
      'img-link':"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      'name':"Iphone 4",
      "description": "Nice phone 4",
      'img-link':"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
  ]


  res.render('index', { products, admin:false });
});

module.exports = router;
