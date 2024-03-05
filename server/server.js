const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require("dotenv").config();
// const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json())
// app.use(bodyParser.json());


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//DB connection 
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected!!")
})

app.listen(port, () => {
    console.log("PORT conneted on " + port);
})

//Item route
const testItemRoter = require('./routes/TestRoutes');
app.use("/api/Test", testItemRoter)






//userName - maduwanthavimukthi
//password - SOoeLn3LHHFvSlaH