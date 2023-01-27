const express = require('express')
const mongoose = require('mongoose')
const { connect } = require("./db")
const userRouter = require("./router/userRouter")
const urlRouter = require("./router/urlRouter")
const cors = require("cors")

const PORT = 8000
const app = express();
app.use(express.json());
app.use(cors());

connect();


app.use('/', userRouter)
app.use('/url', urlRouter)
 
app.listen(PORT, () => {
    `Server is running at localhost:$(PORT)`;
})
