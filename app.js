const PORT = process.env.PORT || 5000;
const express =  require ('express');
const mongose = require ('mongoose');
const app = express ();

const bodyParser = require ('body-parser');
// mongose
const db = require ('./config/keys.js').mongoURI;
// configure body-parser
app.use (bodyParser.json ({limit: '50mb'}));// parse form data client
app.use (bodyParser.urlencoded ({limit: '50mb', extended: true}));
// connect to Mongose
mongose
    .connect (db,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() =>{
        console.log ('MongoDB Connected...');

    })
    .catch(err => console.log (err));

// routes
app.use('/api/user', require('./routes/api.js'));

app.listen(PORT, console.log (`Sever started on port ${PORT}`));