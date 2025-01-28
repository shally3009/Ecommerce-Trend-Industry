let express = require('express');
const connectDB = require('./src/Database/db');
let app = express();

require('dotenv').config({
    path:'./src/Config/.env'
});
const PORT = process.env.port || 5000;
const url = process.env.db_url;

app.get('/', (req, res) => {
    res.send('Welcome to E-commerce Backend');
})

app.listen(PORT, async() => {
    try{
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(error){
        console.log('Error connecting to database');
    }

})