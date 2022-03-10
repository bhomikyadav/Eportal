"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var knex = require('./db');

var jwt = require('jsonwebtoken');

require('./middleware/Authorization');

process.env.JWTSECRET; // const { check, validationResult }
//     = require('express-validator');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.get("/", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.json('Server running....');
          } catch (err) {
            console.log(err);
            res.status(500).json("ERROR : $".concat(err.message));
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('server running');
});

function generateAccessToken(email) {
  return jwt.sign(email, process.env.JWTSECRET, {
    expiresIn: '1800s'
  });
}

app.post("/login", function _callee2(req, res) {
  var email, password, remember, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            email = req.body.password.email_v;
            password = req.body.id.password_v;
            remember = req.body.id.remember_v;
            token = generateAccessToken({
              email: req.body.password.email_v
            });
            console.log(token);
            res.json(token); //     const str = await knex.from('users')
            //    .select('roles')
            //    .where({login_id:email}) 
            //    .where({password:password})
            //    .where({status: true})
            //  if (str==null || undefined){
            //    res.json(err)
            //    console.log(err,"err")
            //  }
            //res.json(str);
          } catch (err) {
            console.log(err);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});