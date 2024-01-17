import { app } from './app.js';
import { configEnv } from './config/configEnv.js';

const port = configEnv.server.port;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})