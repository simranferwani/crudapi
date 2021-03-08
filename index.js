const mongoose = require('mongoose')
require('dotenv/config')
const express = require("express")
const app = express();

const port = process.env.port || 5000
const postRouter = require('./route/posts')

// app.get("/" ,(req , res) => {
//     res.send("Hello there")

// })

mongoose.connect(process.env.DB_CONNECTION ,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err))

app.use(express.json());
app.use("/post" , postRouter)


app.listen(port , () =>console.log(`app running successfully on port ${port}`));