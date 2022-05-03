const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const route = require('./routes/index');
const path = require("path");
const https = require("https");
////////////////////////////////////////

dotenv.config();
const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL,
    (err) => {
    if(err)
        console.log(err);
    else
        console.log("Succesfully connected to MongoDB");
});

// Views
app.set('views', './html');
app.set('view engine', 'ejs');

//////////////////////////

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api', route);
app.use('/public', express.static(path.join(__dirname, 'public')));

//////////////////////////

app.get("/", (req, res) => {

    const key = "7d2ea264a67c0f8d9b9f2187668a3772";
    let city = "Nur-sultan";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            let text = JSON.parse(data);
            let temperature = text.main.temp;
            let descrip = text.weather[0].main;
            res.render('index', {temperatura: temperature, desc: descrip});
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
})

app.listen(PORT, () =>
    console.log("Server is running on port: http://localhost:" + PORT)
)