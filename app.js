// initialize an express app and set it up
const express = require('express');
const app = express();
const io = require('socket.io');

const port = process.env.PORT || 3000;

// tell our app to use the public for static files
app.use(express.static('public'));

// instantiate the only route we need
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname + '/views/index.html');
})

// create server variable for socket.io to use
const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`)
});