var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {
  res.send('success')
})

router.get('/authorization', (req, res, next) => {
  const userName = req.userName
  res.send({
    code: 200,
    mes: 'success',
    data: {
      token: jwt.sign({ name: userName }, 'abcd', {
        expiresIn: 10
      })
    }
  })
})

module.exports = router;
