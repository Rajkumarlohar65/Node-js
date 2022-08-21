const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Water full', () => {
    console.log('Please turn off the motor!');

    setTimeout(() => {
        console.log('Please turn off the motor! Its a getle remainder');
    }, 2000);

});

console.log("the script is running");
myEmitter.emit('Water full');
console.log("the script is still running");
myEmitter.emit('Water full');