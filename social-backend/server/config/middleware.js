import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
  // Allows Content-Type application/json
  app.use(bodyParser.json());
  // Logger
  app.use(morgan('dev'));
}