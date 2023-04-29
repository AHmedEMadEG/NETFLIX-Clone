const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// DOTENV config
const envPath = process.env.NODE_ENV || '';
require('dotenv').config({path: `${envPath}.env`});

// DB config
require('./config/db.config').connect();


// parse application/json
app.use(bodyParser.json());


// routes
require('./routes/auth.routes')(app);
require('./routes/users.routes')(app);
require('./routes/movies.routes')(app);
require('./routes/lists.routes')(app);




const PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));