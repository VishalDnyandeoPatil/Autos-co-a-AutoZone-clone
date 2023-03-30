const express = require ('express');
const {connection} = require('./config/db');
const {authenticator} = require('./middleware/authentication');
const {userRouter} = require('./routes/userRoutes');
const {postRouter} = require('./routes/postRoutes')
const cors = require('cors');
const port = process.env.port;

const app = express();
app.use(express.json());
app.use(cors());

// Routes are remaing


app.listen(port, async()=>{
    try {
        await connection ;
        console.log("Connected to db");    
    } 
    catch (error) {
        console.log(error.message);
    }
});