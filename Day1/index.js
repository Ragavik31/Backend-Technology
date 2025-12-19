const express = require('express');
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to backend day1 Api")    
});
app.post("/students",(req,res)=>{
    const student = req.body;
    res.json({
        message:"Student data received",
        data:student
    });
});

app.get('/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(3000,()=>{
    console.groupCollapsed("Server running on port 3000")
});