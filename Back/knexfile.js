const path = require('path');
require('dotenv').config();

module.exports = {
  
  development: {
    client: 'pg',
    connection: 'postgres://postgres:manish123@localhost:5432/postgres',
  },
};



