const PORT = process.env.PORT || 5000;
const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const exphbs = require('express-handlebars');
const app = express();
const path = require("path");
const fileUpload = require('express-fileupload');

// configure fileupload
app.use(fileUpload());


// configure path static
app.use("/public", express.static(path.join(__dirname, "public")));
const rootDir = path.dirname(process.mainModule.filename);
app.use(express.static(path.join(rootDir, 'public')));


// configure body-parser
app.use(bodyParser.json({ limit: "50mb" })); // parse form data client
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));





// configure Mongodb
const db = require("./config/keys.js").mongoURI;
//connect to Mongo
mongose
    .connect(db, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected... ");
    })
    .catch((err) => console.log(err));


// Routes
app.use("/api", require("./routes/api.js"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));