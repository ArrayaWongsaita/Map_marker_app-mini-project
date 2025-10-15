// server/src/server.js
import app from './app.js';
import { env } from './configs/env.config.js';

app.listen(env.PORT, () => {
  // show a message when the server is running
  console.log(`Server is running on http://localhost:${env.PORT}`);
  // show a message for the API docs
  console.log(`API docs available at http://localhost:${env.PORT}/api-docs`);
});
