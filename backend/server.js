const express = require('express'),
cors =          require('cors');

//Environment configurations

require('dotenv').config();

// Setting up web server and local port

const app = express();
const port = process.env.PORT || 5000;

// Middlewares for parsing JSON

app.use(cors());
app.use(express.json());

// Starting up server to listen on port

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});
