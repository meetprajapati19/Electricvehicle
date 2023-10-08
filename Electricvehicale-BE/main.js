const express = require('express');
const cors = require('cors')
const fs = require("fs");
const csv = require("csv-stringify");

// Conigurations
const app = express ();
app.use(express.json());
app.use(cors())

const port = 3000;

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});


// API 

app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    response.send(status);
});




app.post("/store-data", (req,res)=>{
    
    console.log("Request");
    
    console.log(req.body)
    var data = [
        [req.body.firstname,req.body.lastName,req.body.emailAddress,req.body.mobile],
      ];

      csv.stringify(data, (err, output) => {
        console.log(output)
        fs.appendFile("demoA.csv", output, (err)=>{
            console.log(err);
        });
        console.log("OK");
      });

      res.send("Successfully");
})