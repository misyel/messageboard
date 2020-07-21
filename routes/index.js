var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  //make msgs avaliable to & render index.pug
  res.render('index', { title: 'Messageboard', messages: messages }); 
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  console.log('form page');
  res.render('form', {title: "add a new message"}); 
});


router.post('/new', function(req, res, next) {
  //put message contents into msg array after submit
  messages.push({text: req.body.message, user: req.body.name, added: new Date()});

  //redirect back to home
  res.redirect('/');
});



module.exports = router;
