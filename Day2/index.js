const express = require('express'); // Importing express module
const app = express(); // Creating an express application
const studentRoutes = require('./routes/studentRoutes'); 
const logger = require("./middleware/logger"); 

app.use(express.json()); 
app.use(logger); 

app.use('/students', studentRoutes); 




app.listen(3000,()=>{
    console.groupCollapsed("Server running on port 3000")
});