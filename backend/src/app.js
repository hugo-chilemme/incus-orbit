import path from 'node:path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; // Add this line
import { fileURLToPath } from 'node:url';
import { loadRoutes } from './core/autoLoader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createApp() {
  const app = express();

  app.use(cors()); // Add this line to enable CORS
  app.use(express.json());
  app.use(morgan('dev'));

  await loadRoutes(app, path.join(__dirname, 'api'), '/api');

  app.get('/', (_req, res) => {
    res.json({
      success: true,
      message: 'Welcome to the API server!',
      routesBase: '/api/{version}/{module}'
    });
  });

  app.use((error, _req, res, _next) => {
    console.error('Unhandled message:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  });

  // not found handler
  app.use((_req, res) => {
    res.status(404).json({ success: false, message: 'The requested resource was not found' });
  });

  return app;
}
