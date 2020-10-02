
const Logger = require('./logger');
const logger = new Logger();

// Register a listner

logger.addListener('messageLogged', (arg)=>{
    console.log('Detected messageLogged event', arg);
})

// Trigger an event

logger.consoleLogger('Insert success');



