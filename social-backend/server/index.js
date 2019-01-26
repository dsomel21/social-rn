import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';

const app = express();

/* 
  Database Config
*/
dbConfig();

/* 
  Use Middleware
*/
middlewareConfig(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err){
    console.log(err);
  }
  else {
    console.log(`App listening on PORT: ${PORT}`)
  }
});