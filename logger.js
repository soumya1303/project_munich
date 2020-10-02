
const EventEmitter = require('events');

class Logger extends EventEmitter {
    consoleLogger(message){
        console.log(message);   
        this.emit('messageLogged', {id: 1, url:'http://www.myserver.com/logfile'});
    }
    
}

module.exports = Logger;




