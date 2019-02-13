import bodyParser from 'body-parser';
import morgan from 'morgan';

export default (app) => {
  // Allows Content-Type application/json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  // Logger
  app.use(morgan('dev'));
};
