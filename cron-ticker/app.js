const cron = require('node-cron');
const { syncDB } = require('./task/sync-db');

console.log('Inicio');

cron.schedule('1-59/5 * * * * *', syncDB);