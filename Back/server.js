const express = require('express');
const app = express();
const cors = require('cors')
const knex = require('./db')
const jwt = require('jsonwebtoken');

require('./middleware/Authorization')

process.env.JWTSECRET;

// const { check, validationResult }
//     = require('express-validator');
const { body, validationResult } = require('express-validator');

require('dotenv').config();

app.use(express.json())
app.use(cors({
  origin :'*'
}))

app.get("/",async(req,res)=>{
  try {
    res.json('Server running....')
  } catch (err) {
    console.log(err)
    res.status(500).json(`ERROR : $${err.message}`)
  }
})
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log('server running')
})

  
function generateAccessToken(email) {
  return jwt.sign(email, process.env.JWTSECRET, { expiresIn: '1800s' });
}

app.post("/login",async(req,res)=>{

try {
       const email = req.body.password.email_v
       const password = req.body.id.password_v
       const remember = req.body.id.remember_v
       const token = generateAccessToken({ email: req.body.password.email_v });
        console.log(token);
        res.json(token);
      //     const str = await knex.from('users')
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
    console.log(err)
  }
})

