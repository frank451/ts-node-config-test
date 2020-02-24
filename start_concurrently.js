const concurrently = require('concurrently');
concurrently([
    'npm:watch-*',
    { command: 'nodemon', name: 'server' }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
}).then(success, failure);