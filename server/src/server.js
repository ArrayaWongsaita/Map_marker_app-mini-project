// server/src/server.js
import app from './app.js';
import { env } from './shared/config/env.config.js';

app.listen(env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${env.PORT}`);
});
