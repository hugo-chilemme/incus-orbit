import 'dotenv/config'; // Load environment variables from .env
import 'module-alias/register'; // Enable module aliases

import { createApp } from './app.js';

const PORT = process.env.PORT || 9001;

createApp()
  .then((app) => {
    app.listen(PORT, () => {
      console.info(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to bootstrap server:', error);
    process.exit(1);
  });
