const mongoose = require('mongoose');

function dbConnect() {
    mongoose.connect('mongodb://localhost/chart-test12323213', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log(`We are connected to mongoDB`)
    });
};

module.exports = dbConnect;