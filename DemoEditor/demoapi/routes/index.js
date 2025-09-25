const { exec } = require('child_process');
var express = require('express');
var router = express.Router();
/* GET home page. */


router.get('/', function(req, res, next) {
  const path = 'public/code/test.py';
  exec(`python ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    console.log(stderr);
    res.send(stdout);
  });
  
});

module.exports = router;
