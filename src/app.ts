import express from 'express';
import routes from './routes';

const app: express.Application = express();
app.use(express.json({ limit: '2mb' }))
app.use('/api', routes);

export default app;
