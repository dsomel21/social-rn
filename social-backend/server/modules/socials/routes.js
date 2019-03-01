import { Router } from 'express';
import * as SocialController from './controller';

const routes = new Router();

routes.post('/socials', SocialController.createSocial);
routes.get('/socials', SocialController.getAllSocial);

export default routes;
