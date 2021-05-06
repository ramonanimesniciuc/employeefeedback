var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeefeedback', { useNewUrlParser: true, useUnifiedTopology: true });
const  db = mongoose.connection;
var app = express();
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({limit:'100mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

});

require('./routes/auth.routes')(app);
require('./routes/company.routes')(app);
require('./routes/manager.routes')(app);

module.exports = {db};
const PORT = 3040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})
