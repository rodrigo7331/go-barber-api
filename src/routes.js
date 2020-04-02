
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ hello: 'Hello World' }));

module.exports = routes;
