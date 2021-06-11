const express = require('express');
const mongoose = require('mongoose');

const movieRoute = require('./routes/movieRoute');
const categoryRoute = require('./routes/categoryRoute');
const directorRoute = require('./routes/directorRoute');
const castRoute = require('./routes/castRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection 
mongoose.connect('mongodb://localhost/movieapp-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database bağlandı");
});


//middleware
app.use("/movies", movieRoute);
app.use("/categories", categoryRoute);
app.use("/directors", directorRoute);
app.use("/casts", castRoute);

const port = 3000;

app.listen(port, () => {
    console.log("app server on", port);
})