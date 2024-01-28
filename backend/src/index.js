import { app } from './app.js';
import { configEnv } from './config/configEnv.js';
import { logger } from './helpers/logger.helper.js';

const port = configEnv.server.port;

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
})