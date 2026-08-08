 // Main entry point for the Express server
require("dotenv").config();

const express=require("express");

const cors=require("cors");

const db=require("./database");


const app=express();


app.use(cors());

app.use(express.json());



app.get("/",(req,res)=>{

res.send(
"Backend running"
);

});



app.get("/products",async(req,res)=>{


const result=

await db.query(
"select * from products"
);


res.json(result.rows);


});



app.listen(5000,()=>{


console.log(
"Server running on port 5000"
);


});
