const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck'); //imported in order to use
const apiRoutes = require('./routes/apiRoutes');
//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes); //now the routes in the new files don't have to have /api in their routes






//Default response for any other request NOT FOUND
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})

//start Express.js server on port 3001


